//your code hereconst image = document.querySelectorAll(".image");

image.forEach((image)=>{
image.addEventListener("dragstart",dragStart)
image.addEventListener("dragover",dragOver)
image.addEventListener("drop",drop)
})

function dragStart(e){
    e.preventDefault;
    e.dataTransfer.setData("text/plain",e.target.id)

}
function dragOver(e){
    e.preventDefault();
}
function drop(e){
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedId);
    const dropzone = this;

    if(dropzone.nextSibling == draggedElement){
        dropzone.parentNode.insertBefore(draggedElement, dropzone)
    }
    else{
        dropzone.parentNode.insertBefore(draggedElement, dropzone.nextSibling);
    }
}