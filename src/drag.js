function draggAble(o_scope, o_drag, cb = {}) {
  o_scope.addEventListener('dragover', (e) => {
    e.preventDefault()
    if (cb.dragover) cb.dragover(e)
  }, false)
  o_scope.addEventListener('dragenter', (e) => {
    if (cb.dragenter) cb.dragenter(e)
  })
  o_scope.addEventListener('dragleave', (e) => {
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
    pointX = 0,
    pointY = 0,
    mouseX = 0,
    mouseY = 0,
    touch = false
    ;
  const drag = (e) => {
    if (touch) {
      pointX = touch.clientX - o_scope.offsetLeft
      pointY = touch.clientY - o_scope.offsetTop
    }
    else {

      pointX = e.clientX - posX;
      pointY = e.clientY - posY;
    }
    // console.log(e.type)
    max = {
      left: o_scope.offsetLeft,
      top: o_scope.offsetTop,
      right: o_scope.offsetLeft + o_scope.offsetWidth - o_drag.offsetWidth,
      bottom: o_scope.offsetTop + o_scope.offsetHeight - o_drag.offsetHeight
    }

    if (pointX <= max.left) {
      pointX = max.left
    }
    else if (pointX >= max.right) {
      pointX = max.right
    } else {
      if(touch) pointX = touch.clientX - o_scope.offsetLeft
      else pointX = e.clientX - posX;
    }
    if (pointY <= max.top) {
      pointY = max.top
    } else if (pointY >= max.bottom) {
      pointY = max.bottom
    } else {
      if (touch ) pointY = touch.clientY - o_scope.offsetTop
      else pointY = e.clientY - posY;
    }
    o_drag.style.left = pointX + 'px'
    o_drag.style.top = pointY + 'px'
    if (cb.drag) cb.drag(e)
  }
  const mouseDown = (e) => {
    e.preventDefault();
    posX = e.clientX - o_drag.offsetLeft
    posY = e.clientY - o_drag.offsetTop
    touch = false
    o_scope.addEventListener('mousemove', drag, false)
    if (cb.mouseDown) cb.mouseDown(e)
  }
  const touchMove = (e) => {
    e.preventDefault();
    if (e.type === 'touchmove') touch = e.targetTouches[0]
    o_scope.addEventListener('touchmove', drag, false)
  }
  function mouseUp() {
    o_scope.removeEventListener('mousemove', drag, false)
  }
  function touchEnd() {
    o_scope.removeEventListener('touchmove', drag, false)
  }
  o_drag.addEventListener('mousedown', mouseDown, false)
  o_scope.addEventListener('mouseup', mouseUp, false)
  o_drag.addEventListener('touchmove', touchMove, false)
  o_scope.addEventListener('touchend', touchEnd, false)
}