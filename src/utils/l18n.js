import languages from "./lang.json"

const i18n = (keyword)=>{
    const lang =localStorage.getItem("lang") || "en"
return languages[lang][keyword]
}
export default i18n;