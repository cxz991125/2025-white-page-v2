import React, { useState, useCallback } from "react";

const TestView = () => {
    const [list, setList] = useState(['', '', '',])
    const start = useCallback(() => {
        const temp = []
        list.forEach((item, index) => {
            console.log('item', index, item);
            temp.push(item.split('\n').filter(i => i.trim().length > 0))

        });
        const len = temp[0].length;
        let result = '';
        for (let i = 0; i < len; i++) {
            let str = '['
            temp.forEach((item, index) => {
                str += `\"${item[i]}\",`
                console.log(item)
            }, [list])
            result += str.slice(0, -1) + '],\n';

        }
        console.log(result)
    }, [list])

    const clear = useCallback(() => {
        setList(['', '', '',])
    }, [])
        return (<div>
            {list.map((item, index) => <textarea style={{ width: 500, height: 200, display: 'block', marginBottom: 10 }} key={index} value={item} onChange={(e) => {
                const newList = [...list];
                newList[index] = e.target.value;
                setList(newList);
            }}></textarea>)}
            <button style={{ background: 'white', marginRight: 10 }} onClick={() => setList([...list, ''])}>add</button>
            <button style={{ background: 'white', marginRight: 10 }} onClick={clear}>clear</button>
            <button style={{ background: 'white', marginRight: 10 }} onClick={() => setList(list.slice(0, -1))}>reduce</button>
            <button style={{ background: 'white', marginRight: 10 }} onClick={start}>start</button>
        </div>)
    }

export default TestView;