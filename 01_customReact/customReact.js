// This is how react code works behind



// function customRender1(container, element) {
//     const domElement = document.createElement(element.type);
//     domElement.textContent = element.children;

//     domElement.setAttribute('href', element.props.href);
//     domElement.setAttribute('target', element.props.target)
//     container.appendChild(domElement);
// }

// function customRender2(container, element) {
//     const domElement = document.createElement(element.type);
    // domElement.textContent = element.children;

//     container.appendChild(domElement)
// }

function customRender(container, element) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    if (element.props != null) {
        Object.keys(element.props).forEach(prop => {
            domElement.setAttribute(prop, element.props[prop])
        });
    }

    container.appendChild(domElement)
}

const element1 = {
    type: 'a',
    props: {
        href: "https://github.com/Kushal3502",
        target: "_blank",
    },
    children: "Click Me",
};

const element2 = {
    type: 'h1',
    children: 'This is Custom React...'
}

const element3 = {
    type: 'button',
    children: 'Click Me'
}

const mainContainer = document.querySelector("#root");

// customRender1(mainContainer, element1);
// customRender2(mainContainer, element2)

customRender(mainContainer, element1)
customRender(mainContainer, element2)
customRender(mainContainer, element3)