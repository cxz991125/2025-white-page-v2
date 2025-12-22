import { forwardRef, useId, useEffect, useState, useImperativeHandle } from 'react'
import * as echarts from 'echarts'
import {getEchartsOptions} from '@/common/utils'
import './index.scss'

const ChartComponent = (props, ref) => {
    const {options, remark, height, width} = props;
    const id = useId();
    const [chart, setChart] = useState();

    useImperativeHandle(ref, () => {
        return {
            render() {
                chart.setOption(getEchartsOptions(options))
            }
        }
    })

    useEffect(() => {
        const _c = echarts.init(document.getElementById(id));
        setChart(_c);
        return () => _c.dispose()
    }, [])

    return <div className="chart-wrapper">
        {remark ? <span className="remark">{remark}</span> : null}
        <div id={id} className="w-full h-200px" style={{height: height, width: width}}></div>
    </div>
}

export default forwardRef(ChartComponent);