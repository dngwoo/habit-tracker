1. jsx<br>
    ```jsx
    const name = 'dngwoo'
    return (
        <>
            <h1>{name}</h1>
        </>
    )
    ```
    jsx는 자바스크립트이다. html에 {}를 이용하여 자바스크립트 코드를 넣을 수 있다.<br> 

1. Event<br>
    리액트의 이벤트는 일반 js의 이벤트와는 다르다. 일반 js에서는 브라우저에서 발생되는 모든 이벤트는 Event라는 오브젝트로 정의가능하다. 

    SyntheticEvent란 리액트가 사용하는 이벤트인데 일반js의 이벤트를 한단계 더 감싸서 컴포넌트에 전달하게 된다.

    [브라우저 Event, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event)

    [리액트 Handling Events](https://reactjs.org/docs/handling-events.html)

1. Key<br>
    리스트에서는 고유한 키를 필요로 한다. 그 이유는 고유한 키를 이용하여 수정이 일어나더라도 키를 확인하여 리액트에서 내부적으로 다시 리랜더링을 하지 않거나 하는 최적화 작업을 하게 된다. 자세한 내용은 [docs](https://ko.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)를 확인하면 된다. index는 사용하지 않아야 한다. list에 수정, 삭제등이 일어나게 되면 key값이 바뀌게 되기 때문이다.

1. ref<br>
    [refs](https://reactjs.org/docs/refs-and-the-dom.html)를 참고한다. 
    ```jsx
    inputRef = React.createRef()
    ...
    this.formRef.current.reset()
    this.inputRef.current.value = ''
    ...
    <input ref={this.inputRef}/>
    ```


