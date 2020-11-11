## 순서
- [x] 컴포넌트 분리
- [x] 기본 html
- [x] create 기능 구현 - HabitInput.jsx
- [x] Delete 기능 구현 - HabitInput.jsx
- [x] + 기능 구현 - HabitList.jsx
- [x] - 기능 구현 - HabitList.jsx
- [x] delete 기능 구현 - HabitList.jsx
- [ ] Header 기능 구현 - HabitHeader.jsx
 
 ## 알게 된 것
 1. 상위 -> 하위 컴포넌트로 넘겨준 함수를 사용할 때
    ```jsx
    const HabitList = ({ habit, deleteHabit, addCount, minusCount }) => {
    const onClickDeleteHabit = () => {
        deleteHabit(habit.createdAt);
    };

    const onClickAddCount = () => {
        addCount(habit.createdAt);
    };
    const onClickMinusCount = () => {
        minusCount(habit.createdAt);
    };
    ...
    }
    ```
    상위 컴포넌트에서 받은 함수를 실행할때 만약 인자를 넘기면서 실행시키기 위해선 이렇게 함수를 만들어서 사용해야 된다.
    
1. shape
    ```javascript
    HabitList.propTypes = {
    habit: PropTypes.shape({
        value: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
    };
    ```

    shape나 objectOf를 사용하면 object에 들어가는 프로퍼티들 타입을 정의 할 수 있다.
   
1. 상태관리의 필요성   
    데이터가 단방향으로만 흐르기 때문에 상태(state)를 컴포넌트를 짤 때 구성을 잘 해놓아야 될 것 같다.   
    왜냐하면 하위에서 상위로 state를 전달 할 방법이 없기 때문이다.   
    
1. Strict Mode<br>
    공식 [en-docs](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)에서 찾아 볼 수 있다. [kor-docs](https://ko.reactjs.org/docs/strict-mode.html)

    간단한게 설명해서 side effect를 탐지용으로 사용된다. side effect란 화면이 렌더링 된 이후 비동기로 처리되어야 하는 부수적인 효과들을 말한다.
