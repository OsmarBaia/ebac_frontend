$(document).ready(function() {
    // Add a new task
    $("#add-task").click(function() {
        const task = $("#task-input").val().trim();
        if (task) {
            const taskHtml = `
                <li class="border-2 border-gray-300 p-2 rounded-lg my-2 flex justify-between items-center mr-5">
                    <button class="bg-transparent border-2 border-green-400 border-solid p-2 rounded-md ml-2 mark-complete"></button>
                    <div class="flex flex-wrap px-2 truncate m-2 rounded-lg ">${task}</div>
                    <button class="text-red-500 text-lg rounded-lg ml-2 delete-task"><i class="fi fi-sr-trash-xmark"></i></button>
                </li>
            `;
            $("#task-list").append(taskHtml);
            $("#task-input").val("");
        }
    });

    // Mark a task as complete
    $(document).on("click", ".mark-complete", function() {   
        $(this).parent().find('div').css("text-decoration", "line-through");                
        $(this).removeClass("mark-complete bg-transparent border-2 border-green-400 border-solid p-2 rounded-md");
        $(this).addClass("text-xl text-green-500 mark-incomplete");                
        $(this).html(`<i class="fi fi-sr-checkbox"></i>`);
    });

    // Unmark a completed task
    $(document).on("click", ".mark-incomplete", function() {   
        $(this).parent().find('div').css("text-decoration", "none");                
        $(this).addClass("mark-complete bg-transparent border-2 border-green-400 border-solid p-2 rounded-md");
        $(this).removeClass("text-xl text-green-500 mark-incomplete");                
        $(this).html("");
    });

    // Delete a task
    $(document).on("click", ".delete-task", function() {
        $(this).parent().remove();
    });
});