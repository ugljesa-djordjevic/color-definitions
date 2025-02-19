import { FC, useEffect, useState } from "react"
import { useGetColorQuery, useGetColorPaletteQuery } from "../../../store/slices/apiSlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { setColor } from "../../../store/slices/colorSlice";


export const Home: FC = () => {
  const [color, setLocalColor] = useState('#005a6d');
  const dispatch = useDispatch();
  const {data, error, isLoading} = useGetColorQuery(color, {
    skip: !color, // Prevents query from being executed if input is empty
  });
  const { data: paletteData } = useGetColorPaletteQuery(color, { 
    skip: !color // Prevents query from being executed if input is empty
  });

  useEffect(() => {
    if (data?.hex?.value) {
      dispatch(setColor(data.hex.value)); // Setting color in Redux to change the background color of the header
    } else if (!color || color === '#') {
      dispatch(setColor("#005a6d")); // Reset to default if input is empty
    }
  }, [data, color, dispatch]);  

  // I will use Tailwind here instead of Material UI to switch it up a bit and show how it can be done that way as well
  // P.S. this is not the prefered way to solution of course

  return (
    <div className="px-5 py-25 flex flex-col gap-8 justify-center items-center">
      <div className="text-center">
        <p className="text-xl">Input any color to change the background of header</p>
        <KeyboardArrowDownIcon sx={{ fontSize: 30}} />
      </div>

      <input 
        type="text" 
        value={color ? color : setLocalColor('#')} 
        onChange={(e) => setLocalColor(e.target.value)} 
        placeholder="Please input any color in HEX (e.g. #ff5733)" 
        className="border p-2 min-w-80"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching color</p>}
      <div className="flex flex-col gap-8 justify-center items-center min-w-80">
        {data?.hex?.value ? (
          <h2>Thank you for inputing the: <strong>{ data.name?.value }</strong> color</h2>
        ) : (
          <h2>Please input any color in HEX (e.g. #ff5733)</h2>
        )}
      </div>

       {/* Generating Color Palette from Color inputed */}
       {paletteData?.colors && (
        <div className="mt-10 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold">Generated Color Palette:</h2>
          <div className="flex gap-2 mt-3">
            {paletteData.colors.map((color, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-md border"
                style={{ backgroundColor: color.hex.value }}
                title={color.name.value}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}