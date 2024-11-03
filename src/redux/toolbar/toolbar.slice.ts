import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { wordListGenerator, quoteGenerator } from '../../utils/generator';

interface ToolbarState {
    clock: boolean;
    openModal: boolean;
    colorPickerSelection: string;
    sideNavExpand: boolean;
    pageTitle: string;
}

// Initial state
const initialState: ToolbarState = {
    clock: true,
    openModal: false,
    colorPickerSelection: 'Default',
    sideNavExpand: false,
    pageTitle: 'Dashboard',
};

// const setNewWordArray = (state: any) => {
//     switch (state.toggleMenuValue) {
//         case 'time':
//             state.newWordArray = [...wordListGenerator(state.toggleTimerValue)];
//             break;
//         case 'word':
//             state.newWordArray = [
//                 ...wordListGenerator(state.toggleTexLengthValue),
//             ];
//             break;
//         case 'quote':
//             let newQuoteObject = quoteGenerator();
//             state.quoteSource = newQuoteObject.source;
//             state.newWordArray = [...newQuoteObject.quote.split(' ')];
//             break;
//         case 'zen':
//             state.newWordArray = [];
//             break;
//         case 'custom':
//             state.newWordArray = [];
//             break;
//         default:
//             state.newWordArray = [
//                 ...wordListGenerator(state.toggleTexLengthValue),
//             ];
//     }

//     // return {

//     //     value: action.payload,
//     //   };
// };

// Create slice
const toolbarSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
        // setPunctuationToggle: (state, action: PayloadAction<boolean>) => {
        //     state.punctuationBool = action.payload;
        // },
        // setNumberToggle: (state, action: PayloadAction<boolean>) => {
        //     state.numberBool = action.payload;
        // },
        // setMenuToggle: (state, action: PayloadAction<string>) => {
        //     state.toggleMenuValue = action.payload;
        //     switch (action.payload) {
        //         case 'time':
        //             state.clock = false;
        //             state.showLeftTabs = true;
        //             state.quoteSource = null;
        //             break;
        //         case 'word':
        //             state.clock = true;
        //             state.showLeftTabs = true;
        //             state.quoteSource = null;
        //             break;
        //         case 'quote':
        //             state.clock = true;
        //             state.showLeftTabs = false;
        //             // state.newWordArray
        //             break;
        //         case 'zen':
        //             state.clock = true;
        //             state.showLeftTabs = false;
        //             state.quoteSource = null;
        //             break;
        //         case 'custom':
        //             state.clock = true;
        //             state.showLeftTabs = true;
        //             state.quoteSource = null;
        //             break;
        //         default:
        //             state.clock = true;
        //             state.showLeftTabs = true;
        //             state.quoteSource = null;
        //             break;
        //     }
        //     setNewWordArray(state);
        // },
        // setTimerValueToggle: (state, action: PayloadAction<number>) => {
        //     state.toggleTimerValue = action.payload;
        //     setNewWordArray(state);
        // },
        // setTextLengthValueToggle: (state, action: PayloadAction<number>) => {
        //     state.toggleTexLengthValue = action.payload;
        //     setNewWordArray(state);
        // },
        // setQuoteLengthValueToggle: (state, action: PayloadAction<string>) => {
        //     state.toggleQuoteLengthValue = action.payload;
        // },
        // // setShowLeftTabs: (state, action: PayloadAction<boolean>) => {
        // //     state.showLeftTabs = action.payload;
        // // },
        // resetWordArray: (state) => {
        //     // console.log('new array');
        //     setNewWordArray(state);
        // },
        // setNewQuote: (state) => {
        //     console.log('new array');
        //     state.newWordArray = [
        //         ...wordListGenerator(state.toggleTexLengthValue),
        //     ];
        // },
        // setShowRightTabs: (state, action: PayloadAction<boolean>) => {
        //     state.showRightTabs = action.payload;
        // },
        // setToggleModal: (state) => {
        //     state.openModal = !state.openModal;
        // },
        // setToggleShowIncorrectWord: (state) => {
        //     state.showIncorrectWord = !state.showIncorrectWord;
        // },
        // setToggleShowIncorrectCounter: (state) => {
        //     state.showIncorrectCounter = !state.showIncorrectCounter;
        // },
        setColorPickerSelection: (state, action: PayloadAction<string>) => {
            state.colorPickerSelection = action.payload;
        },
        setSideNavExpand: (state, action: PayloadAction<boolean>) => {
            state.sideNavExpand = action.payload;
        },
        setPageTitle: (state, action: PayloadAction<string>) => {
            state.pageTitle = action.payload;
        },
    },
});

// Export actions
export const {
    // setPunctuationToggle,
    // setNumberToggle,
    // setMenuToggle,
    // setTimerValueToggle,
    // setTextLengthValueToggle,
    // setQuoteLengthValueToggle,
    // resetWordArray,
    // setShowLeftTabs,
    // setShowRightTabs,
    // setToggleModal,
    // setToggleShowIncorrectWord,
    // setToggleShowIncorrectCounter,
    setColorPickerSelection,
    setSideNavExpand,
    setPageTitle,
} = toolbarSlice.actions;

// Export reducer
export default toolbarSlice.reducer;
