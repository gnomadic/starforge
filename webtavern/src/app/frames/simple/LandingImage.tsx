export default function LandingImage() {

  return (

<div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    fontSize: 32,
    fontWeight: 600,
    color: "#fff",
    backgroundImage: 'linear-gradient(to right, #334d50, #cbcaa5)',

  }}
>

<div style={{display:'flex'}}>
 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#fff" stroke-width="3">
    <path d="M20 100h160m-80-80v160M43 43l114 114m-114 0L157 43"/>
    <circle cx="20" cy="100" r="5"/>
    <circle cx="180" cy="100" r="5"/>
    <circle cx="100" cy="20" r="5"/>
    <circle cx="100" cy="180" r="5"/>
    <circle cx="43" cy="43" r="5"/>
    <circle cx="157" cy="157" r="5"/>
    <circle cx="43" cy="157" r="5"/>
    <circle cx="157" cy="43" r="5"/>
    <path stroke-width="2" d="m43 157 57-137 57 137z"/>
  </g>
</svg>

</div>


<div style={{display: 'flex', marginTop: 40, flexDirection: 'row', flexWrap: 'wrap'}}>
    <div style={{ flexBasis: '43%', justifyContent:'flex-end', color: '#000'  }}>create</div>
    <div style={{ flexBasis: '57%' ,justifyContent:'flex-start', paddingLeft: 15}}>on-chain</div>
    
  </div>

  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <div style={{ flexBasis: '43%', justifyContent:'flex-end' }}> </div>
    <div style={{ flexBasis: '57%' ,justifyContent:'flex-start', paddingLeft: 15}}>free</div>
  </div>

    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <div style={{ flexBasis: '43%', justifyContent:'flex-end' }}> </div>
    <div style={{ flexBasis: '57%' ,justifyContent:'flex-start', paddingLeft: 15}}>community</div>
  </div>

      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <div style={{ flexBasis: '43%', justifyContent:'flex-end' }}> </div>
    <div style={{ flexBasis: '57%' ,justifyContent:'flex-start', paddingLeft: 15}}>defi</div>
  </div>



    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <div style={{ flexBasis: '43%', justifyContent:'flex-end' }}> </div>
    <div style={{  display: 'flex', flexBasis: '57%' ,justifyContent:'flex-start', paddingLeft: 15}}> no-code <span style={{color: '#000', paddingLeft: 15}}> games</span></div>
  </div>

    
  
</div>





  )

}