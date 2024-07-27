const { supabase } = require('../db/connection');

async function get_menu_from_date(date) {
    const { data, error } = await supabase
        .from('dining_menu')
        .select('*')
        .eq('date', date)
        .single();

    if (error) {
        return error;
    }

    return data;
}

async function post_menu(lunch, dinner, special = false) {
    const { data, error } = await supabase
        .from('dining_menu')
        .insert([
            { lunch: lunch, dinner: dinner, special: special }
        ]);

    if (error) {
        return error;
    }

    return data;
}

async function add_dining_entry(stu_id, meal_time) {
    // check if (date, stu_id) already exists
    const currentDate = new Date().toISOString().split('T')[0];
    const { data: copy, error } = await supabase
        .from('dining_entry')
        .select('*')
        .eq('stu_id', stu_id)
        .eq('date', currentDate)
        .single();
    
    if (copy) {
        const { data, error } = await supabase
            .from('dining_entry')
            .update(meal_time == 'lunch' ? { lunch: true } : { dinner: true })
            .eq('stu_id', stu_id)
            .eq('date', currentDate);
    } else {
        const { data, error } = await supabase
            .from('dining_entry')
            .insert([
                { stu_id: stu_id, lunch: meal_time == 'lunch', dinner: meal_time == 'dinner' }
            ]);
    }
}

async function get_dining_entry(stu_id, date) {
    const { data, error } = await supabase
        .from('dining_entry')
        .select('*')
        .eq('stu_id', stu_id)
        .eq('date', date)
        .single();

    if (error) {
        return {
            stu_id: stu_id,
            date: date,
            lunch: false,
            dinner: false
        }
    }

    return data;
}

async function is_mess_manager(stu_id) {
    const { data, error } = await supabase
        .from('mess_manager')
        .select('*')
        .eq('stu_id', stu_id)
        .single();

    if (error) {
        return error;
    }

    return data;
}

async function get_all_stu_id() {
    const { data, error } = await supabase
        .from('student')
        .select('stu_id', 'level_term');

    if (error) {
        return error;
    }

    return data;
}

module.exports = {
    get_menu_from_date,
    post_menu,
    add_dining_entry,
    get_dining_entry,
    is_mess_manager,
    get_all_stu_id
}
