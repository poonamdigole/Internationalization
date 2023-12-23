import './Home.css';
import i18n from '../../utils/l18n';

export default function Home(){
    // const [language,setLanguage] = useState("en")
  return (
    <div className='body'>
      
<div className='container'> 
<h1 className='title'>{i18n("title")}</h1>
<p>{i18n('defination')}</p>


<div className='select-box'>
<select 
className='select-input'
defaultValue={localStorage.getItem("lang")} onChange={(e)=>{
localStorage.setItem('lang' , e.target.value)
window.location.reload();

}}>
  <option value='en'>English</option>
  <option value='hi'>Hindi</option>
  <option value='mara'>Marathi</option>
</select>
</div>
      </div>
    </div>
  )
};