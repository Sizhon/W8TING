import supabase from "./supabase";

let count = 1;

const numberAssignmentGenerator = async () => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const tableQuery = await supabase
        .from("Onboarding").select("*", {count: "exact"})
        .gte("created_at", startOfDay.toISOString())

    return tableQuery.count === 0 ? 1 : count++;
};

export default numberAssignmentGenerator;