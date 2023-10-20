/* Istall
  - o_scope and all parent  should have specifix 'height'
  - o_drag element should have attribute 'draggabe=true'
  - o_drag shoud 'position: fixed'
*/
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