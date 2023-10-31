import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

export const Iframe = forwardRef((props, ref) => {
  const box = useRef<HTMLDivElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return box;
    },
    []
  );
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const width = box.current?.offsetWidth || 0;
      const device =
        box.current?.querySelector<HTMLDivElement>('.marvel-device');
      if (device) {
        device.style.transform = `translate(-50%, -50%) scale(${
          (width - 20) / 427
        })`;
        device.style.transformOrigin = 'center';
      }
    });
    resizeObserver.observe(box.current!);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div
      ref={box}
      style={{
        position: 'relative',
      }}
    >
      <div
        className="marvel-device iphone-x"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      >
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
        <div className="inner-shadow"></div>
        <div className="screen">
          <iframe src="http://127.0.0.1:4201/" title="iframe" frameBorder={0} width={'100%'} height={"100%"}></iframe>
        </div>
      </div>
    </div>
  );
});
