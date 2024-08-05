import supabase from "./supabase";

//TODO: Implement numberAssignmentGenerator, count cannot be a pre defined variable as when server restarts, it will reset to 2
//TODO: Implement a way(probably dictionary) to store the assigned numbers and check if the number is already assigned
let used: { [key: number]: boolean } = {};

const countInitializer = async () => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const tableSizeRes = await supabase
        .from("Onboarding")
        .select("*", {count: "exact"})
        .gte("created_at", startOfDay.toISOString())

    tableSizeRes.data?.forEach((row) => {
      row.assigned_number && (used[row.assigned_number] = true);
    })
}

const numberAssignmentGenerator = async () => {
    for (let i = 1; i < 2147483647; i++) if (!used[i]) return i;
};

export const updateUsed = (key: number, value: boolean) => {
    used[key] = value;
}

countInitializer().then(r => console.log(`Count table initialized`));  // Initialize the count variable

export default numberAssignmentGenerator;