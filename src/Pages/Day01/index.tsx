import globe from 'assets/globe.svg';

export function Day01() {
  return (
    <div className="flex justify-center h-full">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-10">
        <img src={globe} alt="background" />
      </div>

      <div className="helloWorld flex gap-3 justify-center items-center">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        &nbsp;
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
      </div>
    </div>
  );
}
