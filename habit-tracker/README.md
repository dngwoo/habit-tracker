1. jsx<br>
    ```jsx
    const name = 'dngwoo'
    return (
        <>
            <h1>{name}</h1>
        </>
    )
    ```
    jsx는 자바스크립트이다. html에 {}를 이용하여 자바스크립트 코드를 넣을 수 있다.
    <br> 
    <br>
    
1. Event<br>
    리액트의 이벤트는 일반 js의 이벤트와는 다르다. 일반 js에서는 브라우저에서 발생되는 모든 이벤트는 Event라는 오브젝트로 정의가능하다. 

    SyntheticEvent란 리액트가 사용하는 이벤트인데 일반js의 이벤트를 한단계 더 감싸서 컴포넌트에 전달하게 된다.

    [브라우저 Event, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event)

    [리액트 Handling Events](https://reactjs.org/docs/handling-events.html)
    <br>
    <br>

1. Key<br>
    리스트에서는 고유한 키를 필요로 한다. 그 이유는 고유한 키를 이용하여 수정이 일어나더라도 키를 확인하여 리액트에서 내부적으로 다시 리랜더링을 하지 않거나 하는 최적화 작업을 하게 된다. 자세한 내용은 [docs](https://ko.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)를 확인하면 된다. index는 사용하지 않아야 한다. list에 수정, 삭제등이 일어나게 되면 key값이 바뀌게 되기 때문이다.
    <br> 
    <br>

1. [refs](https://reactjs.org/docs/refs-and-the-dom.html)<br>
    ```jsx
    inputRef = React.createRef()
    ...
    this.formRef.current.reset()
    this.inputRef.current.value = ''
    ...
    <input ref={this.inputRef}/>
    ```
    <br> 

1. [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)<br>
    상위컴포넌트의 state가 변경되면 밑의 모든 자식 컴포넌트들도 리랜더링 된다. React는 Virtual Dom을 사용하여(트리가 메모리상에 올라감) 바뀐 부분만 실제 DOM에 적용시켜주기 때문에 성능상 아무런 문제가 없다. 하지만 라이프싸이클 함수(componentDidUpdate등)에서 문제가 생긴다. 업데이트 되면 실행될 수 도 있기 떄문이다. 그러므로 PureComponnet를 사용하여 방지한다. shouldComponentUpdate()를 구현한 컴포넌트이다. 
    ```jsx
    import React, { PureComponent } from 'react';

    class HabitAddForm extends PureComponent {
        ...
    }
    ```
    <br>
    하지만 shallow(얇게) 비교하기 때문에 object에서 안의 값들이 바뀌게 되도 인식하지 못한다. 예를 들어 props로 들어온 데이터가 객체일때 안의 값이 바껴도 인지하지 못하는 것이다. (obj의 ref만 검사) 그래서 Destructuring assignment 문법을 사용하여 값을 넘겨주면 된다. 그러면 새로운 오브젝트를 생성해서 넘겨주므로 리랜더링이 일어난다.
    <br>
    <br>
    콘솔로 리랜더링되는지 확인하지말고 react dev tools에 있는 highlight기능을 사용하면 된다.
    <br>
    <br>
1. Strict Mode<br>


