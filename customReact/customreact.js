function customRender(reactElement, container){
    const domElement=document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.targat)
    container.appendChild(domElement)
}


const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'Google link'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)