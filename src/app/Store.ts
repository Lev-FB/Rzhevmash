import {makeAutoObservable} from "mobx";
type SlideIndex= 0|1|2
interface SlideData {
    from:SlideIndex,
    to:SlideIndex
}
class Store {
    anchorLinkColor:'#FBFBFB'|'black' = '#FBFBFB'
    currentSlide:SlideIndex = 0
    constructor() {
        makeAutoObservable(this)
    }

    switchLinkColor(data:SlideData){
        console.log(data)
        if(this.currentSlide==1||this.currentSlide===2){
            this.anchorLinkColor='black'
        }
        if(this.currentSlide===0){
            this.anchorLinkColor='#FBFBFB'
        }

    }
    switchSlide(data:SlideData){
        this.currentSlide = data.to
        this.switchLinkColor(data)
    }
}

export default new Store()