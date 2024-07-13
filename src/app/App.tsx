import './App.css'
import {HeroRouter} from "./routing/HeroRouter.tsx";
import {Background} from "../shared/ui";
import {Providers} from "./providers/Providers.tsx";
import {Header} from "../widgets/header";
import {Main} from "../widgets/main";
// @ts-ignore
import { FullPage, Slide } from 'react-full-page';
import {useStore} from "../shared/lib";
import {Advantages} from "../widgets/advantages";
function App() {
    const store = useStore();

  return (
      <>
            <FullPage beforeChange={(data:{to:0|1|2,from:0|1|2})=> {
                store.switchSlide(data)
            }}  duration={1000}  >
                <Slide>
                    <Providers>
                        <Background>
                            <>
                                <Header/>
                                <HeroRouter/>
                            </>
                        </Background>
                    </Providers>
                </Slide>
                <Slide>
                    <Main/>
                </Slide>
                <Slide>
                    <Advantages/>
                </Slide>
            </FullPage>
      </>
  )
}

export default App
