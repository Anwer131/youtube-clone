import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack
      direction="row"
      sx={{
        overflow:'auto',
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'}
      }}>
        {categories.map((category) => (
          <button 
            key={category.name} 
            className="category-btn" 
            style={{background:category.name===selectedCategory&&'#fc1503',color:'white'}}
            onClick={()=>setSelectedCategory(category.name)}
          >
            <span style={{color:category.name===selectedCategory ? 'white':'red', marginRight:'15px'}}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
    </Stack>
)

export default Sidebar