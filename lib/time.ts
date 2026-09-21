export function jakartaDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta',year:'numeric',month:'2-digit',day:'2-digit'}).format(now)}
export function jakartaTime(now=new Date()){return new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Jakarta',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now)}
export function beforeSeven(now=new Date()){return jakartaTime(now)<'07:00:00'}
export function weekday(){return new Intl.DateTimeFormat('id-ID',{timeZone:'Asia/Jakarta',weekday:'long'}).format(new Date()).toUpperCase()}
