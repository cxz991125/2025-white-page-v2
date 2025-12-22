import { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import CharComponent from "../CharComponent";

const InView = (props) => {
  const {triggerOnce = true, rootMargin = '0px 0px -200px 0px' } = props;
  const nodeRef = useRef();
  const chartRef = useRef();
  const { ref: inViewRef } = useInView({
    triggerOnce,
    rootMargin,
    onChange(inView) {
       if (inView) {
        chartRef.current && chartRef.current.render();
       }
    }
  });

  const setRefs = useCallback(
    (node) => {
      nodeRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  return <div ref={setRefs} className="w-full">
    <CharComponent ref={chartRef} {...props}></CharComponent>
  </div>;
};

export default InView;
