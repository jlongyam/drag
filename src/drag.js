function draggAble(o_scope, o_drag, cb = {}) {
  o_scope.addEventListener('dragover', (e) => {
    e.preventDefault()
    if (cb.dragover) cb.dragover(e)
  }, false)
  o_scope.addEventListener('dragenter', (e)=> {
    if (cb.dragenter) cb.dragenter(e)
  })
  o_scope.addEventListener('dragleave', (e)=> {
    if (cb.dragleave) cb.dragleave(e)
  })
  o_scope.addEventListener('drop', (e) => {
    e.preventDefault()
    if (cb.drop) cb.drop(e)
  })
  o_drag.addEventListener('drag', (e) => {
    if (cb.drag) cb.drag(e)
  })
  o_drag.addEventListener('dragstart', (e) => {
    if (cb.dragstart) cb.dragstart(e)
  })
  o_drag.addEventListener('dragend', (e) => {
    if (cb.dragend) cb.dragend(e)
  })
}
function dragMouse(o_scope, o_drag, cb = {}) {
  let
    posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0
    ;
  const drag = (e) => {
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    o_drag.style.left = mouseX + 'px'
    o_drag.style.top = mouseY + 'px'
    if(cb.drag) cb.drag(e)
  }
  const mouseDown = (e) => {
    e.preventDefault();
    posX = e.clientX - o_drag.offsetLeft
    posY = e.clientY - o_drag.offsetTop
    o_scope.addEventListener('mousemove', drag, false)
    if(cb.mouseDown) cb.mouseDown(e)
  }
  function mouseUp() {
    o_scope.removeEventListener('mousemove', drag, false)
  }
  o_drag.addEventListener('mousedown', mouseDown, false)
  o_scope.addEventListener('mouseup', mouseUp, false)
}