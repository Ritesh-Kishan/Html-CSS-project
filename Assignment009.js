const submit=document.getElementById("submit");
const inputa = document.getElementById("input1");
const inputb = document.getElementById("input2");
const uncompletedtask = document.getElementById("uncompleted_task");
const completedtask = document.getElementById("completed_task");


submit.addEventListener("click", function submitButton(){

    if((inputa.value.length > 3 && inputa.value.length <= 10 ) && (inputb.value.length > 3 && inputb.value.length <= 100 )){
        document.getElementById("prompt").innerHTML="Data Entered Successfully";    
        document.getElementById("prompt").style.color="green";
        document.getElementById("prompt").style.display="block";

        setTimeout(()=>{
            let prompt = document.getElementById("prompt");
            prompt.style.display='none';
        },3000);

        newTask();

    }else{
        // console.log('Enter proper details');
        document.getElementById("prompt").innerHTML="Enter proper details";
        document.getElementById("prompt").style.color="red";
        document.getElementById("prompt").style.display="block";

        setTimeout(()=>{
            let prompt = document.getElementById("prompt");
            prompt.style.display='none';
        },3000);
    }


});


function newTask(){
    // A div is created to display the uncompleted task.
    const newTaskSection = document.createElement('div');
    uncompletedtask.appendChild(newTaskSection);
    newTaskSection.className="newTask";

    // Checkbox in the tasks.
    const chkbox = document.createElement('input');
    chkbox.type='checkbox';
    newTaskSection.appendChild(chkbox);
    chkbox.className='check-box';

    //To create div for display about task.
    const TaskSection1 = document.createElement('div');
    newTaskSection.appendChild(TaskSection1);
    TaskSection1.className='Task-Section1';

    // To create div for display of the button.
    const TaskSection2 = document.createElement('div');
    newTaskSection.appendChild(TaskSection2);
    TaskSection2.className='Task-Section2';

    // To display the name of the task.
    const TaskName = document.createElement('div');
    TaskSection1.appendChild(TaskName);
    TaskName.className='Task-Name';
    TaskName.innerHTML=inputa.value;


    // To display the description of the task.
    const TaskDesc = document.createElement('div');
    TaskSection1.appendChild(TaskDesc);
    TaskDesc.className='Task-Desc';
    TaskDesc.innerHTML=inputb.value;

    // To display the delete button.
    const delBtn = document.createElement('button');
    TaskSection2.appendChild(delBtn);
    delBtn.className='del-Btn';
    delBtn.innerHTML="Delete";


    // To display the delete button.
    const status = document.createElement('p');
    TaskSection2.appendChild(status);
    status.className='status';
    status.innerHTML="Incompleted Task!!"

    
    // To clear input field value
inputa.value=null;
inputb.value=null;


chkbox.addEventListener('click', function mycheckbox(){
    if(this.checked){
        completedtask.appendChild(this.parentElement);
        newTaskSection.classList.replace("newTask","newTaskNew");
        status.innerHTML='Task completed';
        status.style.color='green';
    }else{
        uncompletedtask.appendChild(this.parentElement);
        newTaskSection.classList.replace("newTaskNew","newTask");
        status.innerHTML='Incompleted Task!!';
        status.style.color='red';
    }
});


delBtn.addEventListener('click', function Delete(){
    this.parentElement.parentElement.remove();
});


}