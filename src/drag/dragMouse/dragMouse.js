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


