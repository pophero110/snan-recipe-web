import {IconButton, TextField} from "@mui/material";
import {Minus, Plus} from "lucide-react";

export default function InstructionMultiInput({instructions, setInstructions}: {instructions: any[], setInstructions:any}) {
  const handleInstructionChange = (
    index: number,
    value: string
  ) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value
    setInstructions(newInstructions);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    const newInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(newInstructions);
  };

  const instructionsEle = instructions.map((instruction, index) => (
    <div key={index} className="flex items-center mt-2">
      <TextField multiline label={`Step ${index + 1}`} fullWidth
                 value={instruction.text}
                 onChange={(e) =>
                   handleInstructionChange(index, e.target.value)
                 }/>
      <IconButton sx={{backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity, 1))", marginLeft: "1rem"}}
                  onClick={() => removeInstruction(index)}>
        <Minus size={16}/>
      </IconButton>
    </div>
  ));

 return <>
   {instructionsEle}
   <IconButton sx={{backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity, 1))", marginTop: "1rem", display: "block"}}
               onClick={addInstruction}>
     <Plus size={16}/>
   </IconButton>
 </>
}