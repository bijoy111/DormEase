const { supabase } = require('../db/connection');

//--- student functions ---//

async function apply_mess_manager(stu_id_array) {
    const { data, error } = await supabase
        .from('mess_manager_applicant')
        .insert({ stu_id: stu_id_array[0] })
        .select('applicant_id')
        .single();
    
    aid = data.applicant_id;

    for (i = 1; i < stu_id_array.length; i++) {
        const { data, error } = await supabase
            .from('mess_manager_applicant')
            .insert([
                { applicant_id: aid, stu_id: stu_id_array[i] }
            ])
            .select('applicant_id')
            .single();
    }
}

//--- admin functions ---//

async function get_mess_manager_applicant() {
    const { data, error } = await supabase
        .from('mess_manager_applicant')
        .select('*, student(stu_id, name, photo)');

    if (error) {
        return error;
    }

    return data;
}

async function assign_mess_manager(applicant_id) {
    // get all stu_id with same applicant_id
    const { data, error } = await supabase
        .from('mess_manager_applicant')
        .select('stu_id')
        .eq('applicant_id', applicant_id);

    // insert all stu_id into mess_manager
    for (i = 0; i < data.length; i++) {
        const { data_, error_ } = await supabase
            .from('mess_manager')
            .insert([
                { stu_id: data[i].stu_id }
            ]);
    }

    return data;
}

// --- general functions ---//

async function get_mess_manager() {
    const { data, error } = await supabase
        .from('mess_manager')
        .select('*, student(stu_id, name, photo)');

    if (error) {
        return error;
    }

    return data;
}

async function cancel_mess_manager(stu_id) {
    const { data, error } = await supabase
        .from('mess_manager')
        .delete()
        .eq('stu_id', stu_id);
}

module.exports = {
    get_mess_manager_applicant,
    apply_mess_manager,
    get_mess_manager,
    assign_mess_manager,
    cancel_mess_manager
}