function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i=0; i<rankedLists.length; i++) {
    let rankedListsChildren = rankedLists[i].children
    for (let l=0; l<rankedListsChildren.length; l++) {
      rankedListsChildren[l].innerText = (parseInt(rankedListsChildren[l].innerText)+n).toString()
    }
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')
  let divs = grandNode.querySelectorAll('div')
  return divs[divs.length-1]
}
