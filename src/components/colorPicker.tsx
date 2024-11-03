// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Menu } from './customDropdown/Menu';
import { MenuItem } from './customDropdown/MenuItem';
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IoChevronUp } from 'react-icons/io5'; //IoChevronDown
import { useSelector } from 'react-redux'; //useDispatch
import { RootState } from '../redux/store';

import { colorArray } from '../constants/colorList';
import { FaCheck } from 'react-icons/fa6';
// import { Fragment, useEffect } from 'react';
import { useThemeContext } from '../context/themeContext';
import { IoColorPaletteSharp } from 'react-icons/io5';

const ColorPicker = () => {
    const { colorPickerSelection } = useSelector(
        (state: RootState) => state.toolbar
    );
    const { changeThemeColor } = useThemeContext();

    return (
        <Menu as="div" className="relative inline-block text-left">
            {/* bottom-16 */}
            <div
                // transition
                // anchor="top"
                className="z-10 mt-2 w-80 origin-top-right rounded-md bg-component-color shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in h-80 overflow-auto"
                // onClick
            >
                <div className="py-1">
                    {colorArray.map((item, index) => {
                        return (
                            <MenuItem
                                key={`colorpicker-${item.name}-${index}`}
                                onClick={() => changeThemeColor(item.name)}
                            >
                                <a
                                    href="#"
                                    className="flex justify-between px-4 py-2 text-active-color data-[focus]:foreground-color data-[focus]:text-active-color hover:bg-slate-50 hover:bg-opacity-20"
                                    // onClick={() => changeThemeColor(item.name)}
                                    onMouseOver={() =>
                                        changeThemeColor(item.name, true)
                                    }
                                    onMouseOut={() =>
                                        changeThemeColor(colorPickerSelection)
                                    }
                                >
                                    <div className="flex justify-start items-center">
                                        <FaCheck
                                            className="mr-2"
                                            style={{
                                                visibility:
                                                    item.name ===
                                                    colorPickerSelection
                                                        ? 'visible'
                                                        : 'hidden',
                                            }}
                                        />

                                        {item.name}
                                    </div>
                                    <div
                                        className="w-20 h-8 rounded-full p-2 flex justify-between items-center"
                                        style={{
                                            backgroundColor: item.color.bg,
                                        }}
                                    >
                                        <span
                                            className="w-4 h-4 block rounded-full"
                                            style={{
                                                backgroundColor:
                                                    item.color.bgComponent,
                                            }}
                                        ></span>
                                        <span
                                            className="w-4 h-4 block rounded-full"
                                            style={{
                                                backgroundColor:
                                                    item.color.text,
                                            }}
                                        ></span>
                                        <span
                                            className="w-4 h-4 block rounded-full"
                                            style={{
                                                backgroundColor:
                                                    item.color.caret,
                                            }}
                                        ></span>
                                    </div>
                                </a>
                            </MenuItem>
                        );
                    })}
                </div>
            </div>
        </Menu>
    );
};
export default ColorPicker;
