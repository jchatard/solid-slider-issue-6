import { Title } from "solid-start";
import Counter from "~/components/Counter";

import "solid-slider/slider.css";
import { Slider, createSlider } from "solid-slider";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://docs.solidjs.com/start" target="_blank">
          docs.solidjs.com/start
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>

        <MyComponent></MyComponent>
    </main>
  );
}

const MyComponent = () => {
    return (
        <Slider options={{ loop: true }}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
        </Slider>
    );
};