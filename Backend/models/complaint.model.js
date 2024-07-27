const { supabase } = require('../db/connection');

async function get_complaints(role, stu_id) {
    if (role == 'student') {
        const { data, error } = await supabase
            .from('complaint')
            .select('*, student(stu_id, name, photo)')
            .eq('stu_id', stu_id)
            .order('created_at', { ascending: false });

        if (error) console.log(error);

        return data;
    }
    else if (role == 'admin') {
        const { data, error } = await supabase
            .from('complaint')
            .select('*, student(stu_id, name, photo)')
            .order('created_at', { ascending: false });

        if (error) console.log(error);

        return data;
    }
}

async function post_complaint(stu_id, title, body) {
    const { data, error } = await supabase
        .from('complaint')
        .insert([
            {
                stu_id: stu_id,
                title: title,
                description: body,
                status: 'Pending'
            }
        ]);

    if (error) {
        return error;
    }

    return data;
}

async function get_complaint_status(complaint_id) {
    const { data, error } = await supabase
        .from('complaint')
        .select('status')
        .eq('complaint_id', complaint_id);

    if (error) {
        return error;
    }

    return data[0].stage;
}

async function update_complaint_status(complaint_id, new_status) {
    const { data, error } = await supabase
        .from('complaint')
        .update({ status: new_status, last_modified: new Date().toISOString() })
        .eq('complaint_id', complaint_id);

    if (error) {
        return error;
    }

    return data;
}

async function delete_complaint(complaint_id, id) {
    if (id < 1000000) {
        const { data, error } = await supabase
            .from('complaint')
            .delete()
            .eq('complaint_id', complaint_id)
    }
    else {
        const obj = await supabase
            .from('complaint')
            .delete()
            .eq('complaint_id', complaint_id)
            .eq('stu_id', id)
    }
}

module.exports = {
    get_complaints,
    post_complaint,
    get_complaint_status,
    update_complaint_status,
    delete_complaint
}
