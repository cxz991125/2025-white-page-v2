import {useEffect, useId} from 'react'
import { Chart, register } from '@antv/g2';

const defaultOptions = {
    type: 'interval',
    data: {
        type: 'inline',
        value: []
    },
    encode: {
        x: 'x',
        y: 'y'
    }
}

const TestComponent = () => {
    const id = useId();

    useEffect(() => {
        const chart = new Chart({
            container: id,
            type: 'view',
            autoFit: true
        });

        chart.options({
            type: 'interval',
            data:{
                type: 'inline',
                value: [
                    {
                        x: 2021, y: 1331.80,
                    },
                    {
                        x: 2022, y: 1554.90
                    },
                    {
                        x: 2023, y: 1849.25,
                    }
                ]
            },
            style: {
                radiusTopLeft: 20,
                radiusTopRight: 20,
            },
            encode: {
                x: 'x',
                y: 'y',
                color: '#EA6E58',
                size: 20
            }
        })

        chart.render();
    }, [])

    return <div id={id} className="w-full h-200px"></div>
}

export default TestComponent;