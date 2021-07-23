const compose = (...funcs) => (View) => funcs.reduceRight((prevResult,value) => value(prevResult),View)
export default compose