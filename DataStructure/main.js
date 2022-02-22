window.onload = function() {
  const addNodeToTail = document.getElementById("addNodeToTail")
  const addNodeToHead = document.getElementById("addNodeToHead")
  const removeNodeToTail = document.getElementById("removeNodeToTail")
  const removeNodeToHead = document.getElementById("removeNodeToHead")
  const getContent = document.getElementById("getContent")
  const setNodeToAny = document.getElementById("setNodeToAny")
  const removeNodeToAny = document.getElementById("removeNodeToAny")
  const topForm = document.getElementById("topForm")
  const inpValue = document.getElementById("inpValue")
  inpValue.addEventListener('input', () => {
    if(inpValue.value) {
      for(let i = 0 ; i < topForm.children.length ; i++) {
        topForm.children[i].disabled = false
      }
    }else {
      for(let i = 0 ; i < topForm.children.length ; i++) {
        topForm.children[i].disabled = true
      }
    }
  })
}