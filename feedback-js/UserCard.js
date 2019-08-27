const currentDocument = document.currentScript.ownerDocument;
const template = document.createElement('template');
template.innerHTML = `

<style>
*:focus {
  border: .2rem solid #ccc;
  box-shadow: 0 0 0.6rem #666;
  outline: 0;
}
.feedback {margin: 0 auto; width: 90%;}
.feedback h1 {
	font-size: 28px;
	font-family: "Stag-Book";
	color: #454C50;
	line-height: 1.3;
	margin-bottom: 24px;
	font-weight: 400;
}
.feedback ul,
.feedback ol {
	font-family: "Open Sans-Regular";
	color: #68737A !important;
	font-size: 16px;
	font-size: 16px;
	margin: 0 0 0 30px;
	padding: 0;
}

.feedback ul li,
.feedback ol li {
	margin: 10px 0;
	color: #68737A !important;
	font-size: 16px;
	
}

.feedback ul li {
	display: list-item;
	text-align: -webkit-match-parent;
}

.feedback P.brdrcont {	
	font-family: Open Sans-SemiBold;
	font-size: 18px;
	color: rgb(204,0,0) !important;
	line-height: 1.5;

}	
.feedback hr {	
	margin: 32px 0px;
	border-bottom: 1px dotted #B2BDBD;
}

.feedback P, .feedback P.lightcont  {
	color: #68737A !important;
	margin: 0 0 15px 0;
	line-height: 1.5;
	font-family: "Open Sans-Regular";
 	font-size: 16px;
}

.feedback a,
.feedback a:hover,
.feedback a:active,
.feedback a:visited {
	font-family: "Open Sans-SemiBold";
	color: #1B7793;
	text-decoration: none;
	padding: 10px 0;
	font-size: 14px;
}

.feedback .firstdiv{width:300px; display:inline; float:left;}
.feedback .firstdiv p{margin-left: 40px;display:inline;}
.feedback fieldset{border:none;}
.feedback textarea {
    display: block;
    padding: .375rem .75rem;
		font-size: 18px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	overflow:auto;
	resize:vertical;
	margin-bottom:10px;
}
.btn {
	font-size: 1.125em;
    padding: 10px 20px;
    border: #de221c solid 3px;
    color: #de221c;
    float: left;
    text-transform: uppercase; 
	margin-right:10px;
	background-color:white;
	font-family: "Open Sans-Regular";
	}
	.btn:hover {
    border: #de221c solid 3px;
    color: #FFF;
	background-color:#de221c;
	}
.clearflds{clear:left;}
.feedbackbtn{
background-image: url("data:image/svg+xml,%3Csvg width='30' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='122' width='32' y='-1' x='-1'/%3E%3Cg display='none' overflow='visible' y='0' x='0' height='100%25' width='100%25' id='canvasGrid'%3E%3Crect fill='url(%23gridpattern)' stroke-width='0' y='0' x='0' height='100%25' width='100%25'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Ctext transform='rotate(-89.79053497314453 15,60) ' xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='18' id='svg_1' y='66.25' x='-33.76562' stroke-width='0' stroke='%23000' fill='%23ffffff'%3EFEEDBACK%3C/text%3E%3C/g%3E%3C/svg%3E");
	background-repeat:no-repeat;
	background-position:center;
	position:fixed;
	top:50%;
	right:0;
	height:110px;
	text-indent:-100em;
	width:30px;
	margin:0;
	padding:0;
	overflow:hidden;
	z-index:100;
	background-color:rgb(204,0,0) !important;
	color:#FFF;
}
.feedback>input {
	display: none;
}
.feedback>label {
	background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='42' width='42' y='-1' x='-1'/%3E%3Cg display='none' overflow='visible' y='0' x='0' height='100%25' width='100%25' id='canvasGrid'%3E%3Crect fill='url(%23gridpattern)' stroke-width='0' y='0' x='0' height='100%25' width='100%25'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' d='m3.5,16.10491l12.60497,0l3.89503,-12.60491l3.89503,12.60491l12.60497,0l-10.19761,7.79017l3.89523,12.60491l-10.19762,-7.79039l-10.19762,7.79039l3.89523,-12.60491l-10.19762,-7.79017z' stroke-width='1.5' stroke='%23cccccc' fill='%23cccccc'/%3E%3C/g%3E%3C/svg%3E");
	float: right;
	width: 40px;
	height: 40px;
	margin-right: 5px;
}

.feedback>input:checked~label,
.feedback:not(:checked)>label:hover,
.feedback:not(:checked)>label:hover~label {
	background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='42' width='42' y='-1' x='-1'/%3E%3Cg display='none' overflow='visible' y='0' x='0' height='100%25' width='100%25' id='canvasGrid'%3E%3Crect fill='url(%23gridpattern)' stroke-width='0' y='0' x='0' height='100%25' width='100%25'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' d='m3.5,16.10491l12.60497,0l3.89503,-12.60491l3.89503,12.60491l12.60497,0l-10.19761,7.79017l3.89523,12.60491l-10.19762,-7.79039l-10.19762,7.79039l3.89523,-12.60491l-10.19762,-7.79017z' stroke-width='1.5' stroke='%23cc0000' fill='%23cc0000'/%3E%3C/g%3E%3C/svg%3E");
}

.feedback>input:checked+label:hover,
.feedback>input:checked~label:hover,
.feedback>label:hover~input:checked~label,
.feedback>input:checked~label:hover~label {
	background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='42' width='42' y='-1' x='-1'/%3E%3Cg display='none' overflow='visible' y='0' x='0' height='100%25' width='100%25' id='canvasGrid'%3E%3Crect fill='url(%23gridpattern)' stroke-width='0' y='0' x='0' height='100%25' width='100%25'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' d='m3.5,16.10491l12.60497,0l3.89503,-12.60491l3.89503,12.60491l12.60497,0l-10.19761,7.79017l3.89523,12.60491l-10.19762,-7.79039l-10.19762,7.79039l3.89523,-12.60491l-10.19762,-7.79017z' stroke-width='1.5' stroke='%23cc0000' fill='%23cc0000'/%3E%3C/g%3E%3C/svg%3E");
}

/*Thumbs Up*/
.thumbsup{
	border: none;
	float: left;
    background-image: url("data:image/svg+xml,%3Csvg width='34' height='33' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='35' width='36' y='-1' x='-1'/%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg stroke='null' id='svg_1'%3E%3Cpath stroke='null' id='svg_2' d='m32.34036,22.40267c0.694,-0.85673 1.02684,-1.77513 0.98435,-2.72096c-0.04249,-1.04178 -0.52404,-1.85738 -0.92062,-2.35771c0.46031,-1.11032 0.63735,-2.85804 -0.89937,-4.21509c-1.12598,-0.9938 -3.03803,-1.4393 -5.68658,-1.31593c-1.86248,0.08225 -3.42044,0.41808 -3.48418,0.43179l-0.00708,0c-0.35408,0.06168 -0.72941,0.13708 -1.11182,0.21932c-0.02833,-0.43864 0.04957,-1.5284 0.88521,-3.98206c0.99143,-2.91972 0.93478,-5.15406 -0.18412,-6.64819c-1.17556,-1.56952 -3.0522,-1.69289 -3.60457,-1.69289c-0.53112,0 -1.01976,0.21247 -1.36676,0.60313c-0.78606,0.88414 -0.694,2.51535 -0.59486,3.26926c-0.93478,2.42625 -3.555,8.37535 -5.77156,10.02711c-0.04249,0.02742 -0.0779,0.06168 -0.11331,0.09595c-0.65151,0.66482 -1.09058,1.38447 -1.38801,2.01502c-0.41782,-0.21932 -0.89229,-0.34269 -1.40217,-0.34269l-4.31982,0c-1.62878,0 -2.94597,1.28166 -2.94597,2.85118l0,11.13743c0,1.57637 1.32427,2.85118 2.94597,2.85118l4.31982,0c0.63027,0 1.21805,-0.19191 1.6996,-0.52089l1.66419,0.19191c0.25494,0.03427 4.78721,0.58943 9.43986,0.50033c0.84272,0.06168 1.63586,0.09595 2.37236,0.09595c1.26762,0 2.37236,-0.09595 3.29297,-0.28786c2.16699,-0.4455 3.64706,-1.33649 4.39771,-2.64557c0.57361,-1.00066 0.57361,-1.99446 0.48155,-2.62501c1.40925,-1.23368 1.65711,-2.59759 1.60754,-3.55712c-0.02833,-0.55516 -0.1558,-1.02807 -0.29035,-1.37761zm-28.98525,8.37535c-0.57361,0 -1.03392,-0.45235 -1.03392,-1.00066l0,-11.14428c0,-0.55516 0.46739,-1.00066 1.03392,-1.00066l4.31982,0c0.57361,0 1.03392,0.45235 1.03392,1.00066l0,11.13743c0,0.55516 -0.46739,1.00066 -1.03392,1.00066l-4.31982,0l0,0.00685zm27.17235,-9.17724c-0.29743,0.30157 -0.35408,0.76077 -0.12747,1.11717c0,0.00685 0.29035,0.48662 0.32576,1.14458c0.04957,0.89785 -0.39657,1.69289 -1.33135,2.37142c-0.33284,0.24674 -0.46739,0.67167 -0.32576,1.05549c0,0.00685 0.30451,0.91156 -0.1912,1.76828c-0.47447,0.82246 -1.52964,1.41188 -3.1301,1.74087c-1.28178,0.2673 -3.02387,0.31527 -5.16253,0.15078c-0.02833,0 -0.06373,0 -0.09914,0c-4.55351,0.09595 -9.15659,-0.47977 -9.20616,-0.48662l-0.00708,0l-0.71525,-0.08225c0.04249,-0.19191 0.06373,-0.39752 0.06373,-0.60313l0,-11.14428c0,-0.29471 -0.04957,-0.58257 -0.13455,-0.84987c0.12747,-0.4592 0.48155,-1.48042 1.31719,-2.35085c3.17967,-2.43995 6.28852,-10.67137 6.42307,-11.02777c0.05665,-0.14393 0.07082,-0.30157 0.04249,-0.4592c-0.12039,-0.76763 -0.0779,-1.7066 0.09206,-1.9876c0.37533,0.00685 1.38801,0.10966 1.99703,0.92526c0.72233,0.96639 0.694,2.69354 -0.08498,4.98271c-1.18972,3.48859 -1.28886,5.3254 -0.347,6.13415c0.46739,0.40437 1.09058,0.42494 1.5438,0.2673c0.43198,-0.09595 0.84272,-0.1782 1.23221,-0.23988c0.02833,-0.00685 0.06373,-0.01371 0.09206,-0.02056c2.17407,-0.4592 6.06899,-0.74021 7.42158,0.45235c1.14723,1.01436 0.33284,2.35771 0.24078,2.50164c-0.26202,0.38381 -0.18412,0.88414 0.16996,1.19256c0.00708,0.00685 0.75066,0.68538 0.78606,1.59694c0.02833,0.60999 -0.2691,1.23368 -0.88521,1.85053z'/%3E%3C/g%3E%3Cg id='svg_3'/%3E%3Cg id='svg_4'/%3E%3Cg id='svg_5'/%3E%3Cg id='svg_6'/%3E%3Cg id='svg_7'/%3E%3Cg id='svg_8'/%3E%3Cg id='svg_9'/%3E%3Cg id='svg_10'/%3E%3Cg id='svg_11'/%3E%3Cg id='svg_12'/%3E%3Cg id='svg_13'/%3E%3Cg id='svg_14'/%3E%3Cg id='svg_15'/%3E%3Cg id='svg_16'/%3E%3Cg id='svg_17'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
	width: 34px;
	height: 34px;
}

/*Thumbs Down*/
.thumbsdown{
border: none;
	float: left;
	background-image: url("data:image/svg+xml,%3Csvg width='34' height='33' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='35' width='36' y='-1' x='-1'/%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg stroke='null' id='svg_1'%3E%3Cpath stroke='null' id='svg_2' d='m32.34036,22.40267c0.694,-0.85673 1.02684,-1.77513 0.98435,-2.72096c-0.04249,-1.04178 -0.52404,-1.85738 -0.92062,-2.35771c0.46031,-1.11032 0.63735,-2.85804 -0.89937,-4.21509c-1.12598,-0.9938 -3.03803,-1.4393 -5.68658,-1.31593c-1.86248,0.08225 -3.42044,0.41808 -3.48418,0.43179l-0.00708,0c-0.35408,0.06168 -0.72941,0.13708 -1.11182,0.21932c-0.02833,-0.43864 0.04957,-1.5284 0.88521,-3.98206c0.99143,-2.91972 0.93478,-5.15406 -0.18412,-6.64819c-1.17556,-1.56952 -3.0522,-1.69289 -3.60457,-1.69289c-0.53112,0 -1.01976,0.21247 -1.36676,0.60313c-0.78606,0.88414 -0.694,2.51535 -0.59486,3.26926c-0.93478,2.42625 -3.555,8.37535 -5.77156,10.02711c-0.04249,0.02742 -0.0779,0.06168 -0.11331,0.09595c-0.65151,0.66482 -1.09058,1.38447 -1.38801,2.01502c-0.41782,-0.21932 -0.89229,-0.34269 -1.40217,-0.34269l-4.31982,0c-1.62878,0 -2.94597,1.28166 -2.94597,2.85118l0,11.13743c0,1.57637 1.32427,2.85118 2.94597,2.85118l4.31982,0c0.63027,0 1.21805,-0.19191 1.6996,-0.52089l1.66419,0.19191c0.25494,0.03427 4.78721,0.58943 9.43986,0.50033c0.84272,0.06168 1.63586,0.09595 2.37236,0.09595c1.26762,0 2.37236,-0.09595 3.29297,-0.28786c2.16699,-0.4455 3.64706,-1.33649 4.39771,-2.64557c0.57361,-1.00066 0.57361,-1.99446 0.48155,-2.62501c1.40925,-1.23368 1.65711,-2.59759 1.60754,-3.55712c-0.02833,-0.55516 -0.1558,-1.02807 -0.29035,-1.37761zm-28.98525,8.37535c-0.57361,0 -1.03392,-0.45235 -1.03392,-1.00066l0,-11.14428c0,-0.55516 0.46739,-1.00066 1.03392,-1.00066l4.31982,0c0.57361,0 1.03392,0.45235 1.03392,1.00066l0,11.13743c0,0.55516 -0.46739,1.00066 -1.03392,1.00066l-4.31982,0l0,0.00685zm27.17235,-9.17724c-0.29743,0.30157 -0.35408,0.76077 -0.12747,1.11717c0,0.00685 0.29035,0.48662 0.32576,1.14458c0.04957,0.89785 -0.39657,1.69289 -1.33135,2.37142c-0.33284,0.24674 -0.46739,0.67167 -0.32576,1.05549c0,0.00685 0.30451,0.91156 -0.1912,1.76828c-0.47447,0.82246 -1.52964,1.41188 -3.1301,1.74087c-1.28178,0.2673 -3.02387,0.31527 -5.16253,0.15078c-0.02833,0 -0.06373,0 -0.09914,0c-4.55351,0.09595 -9.15659,-0.47977 -9.20616,-0.48662l-0.00708,0l-0.71525,-0.08225c0.04249,-0.19191 0.06373,-0.39752 0.06373,-0.60313l0,-11.14428c0,-0.29471 -0.04957,-0.58257 -0.13455,-0.84987c0.12747,-0.4592 0.48155,-1.48042 1.31719,-2.35085c3.17967,-2.43995 6.28852,-10.67137 6.42307,-11.02777c0.05665,-0.14393 0.07082,-0.30157 0.04249,-0.4592c-0.12039,-0.76763 -0.0779,-1.7066 0.09206,-1.9876c0.37533,0.00685 1.38801,0.10966 1.99703,0.92526c0.72233,0.96639 0.694,2.69354 -0.08498,4.98271c-1.18972,3.48859 -1.28886,5.3254 -0.347,6.13415c0.46739,0.40437 1.09058,0.42494 1.5438,0.2673c0.43198,-0.09595 0.84272,-0.1782 1.23221,-0.23988c0.02833,-0.00685 0.06373,-0.01371 0.09206,-0.02056c2.17407,-0.4592 6.06899,-0.74021 7.42158,0.45235c1.14723,1.01436 0.33284,2.35771 0.24078,2.50164c-0.26202,0.38381 -0.18412,0.88414 0.16996,1.19256c0.00708,0.00685 0.75066,0.68538 0.78606,1.59694c0.02833,0.60999 -0.2691,1.23368 -0.88521,1.85053z'/%3E%3C/g%3E%3Cg id='svg_3'/%3E%3Cg id='svg_4'/%3E%3Cg id='svg_5'/%3E%3Cg id='svg_6'/%3E%3Cg id='svg_7'/%3E%3Cg id='svg_8'/%3E%3Cg id='svg_9'/%3E%3Cg id='svg_10'/%3E%3Cg id='svg_11'/%3E%3Cg id='svg_12'/%3E%3Cg id='svg_13'/%3E%3Cg id='svg_14'/%3E%3Cg id='svg_15'/%3E%3Cg id='svg_16'/%3E%3Cg id='svg_17'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
	width: 34px;
	height: 34px;
    transform: rotate(180deg);
}
</style>
<div class="feedback">
<h1>Feedback </h1>
<p class="brdrcont">Overall experience?
  </p>
  <div class="firstdiv">
  <p>Terrible</p><p>Fair</p><p>Great</p>
  <fieldset class="feedback">
<input type="radio" id="star1"name="rating" value="1"/><label class = "full" for="star1"></label>
<input type="radio" id="star2"name="rating" value="2"/><label class = "full" for="star2"></label>
<input type="radio" id="star3"name="rating" value="3"/><label class = "full" for="star3"></label>
<input type="radio" id="star4"name="rating" value="4"/><label class = "full" for="star4"></label>
<input type="radio" id="star5"name="rating" value="5"/><label class = "full" for="star5"></label>
<input type="radio" id="star6"name="rating" value="6"/><label class = "full" for="star6"></label>

</fieldset></div>
<div class="clearflds"></div>
  <hr>
    <p class="brdrcont">Was the information provided in the page useful? 
  </p>
  <div><button type="button" class="btn"><span class="thumbsup"></span>&nbsp;Yes</button>
  <button type="button" class="btn"><span class="thumbsdown"></span>&nbsp;No</button></div>
  <div class="clearflds"></div>
  <hr>

    <p class="brdrcont"> How could this page or website can be improved?
  </p>
  <div><textarea rows="4" cols="60">
Type your text here...
</textarea>
<button type="button" class="btn">Submit</button></div>
 <div class="clearflds"></div>
<hr>

<a href="#" class="feedbackbtn">Feedback</a>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    // If you define a constructor, always call super() first as it is required by the CE spec.
    super();

    // Setup a click listener on <user-card>
    this.addEventListener('click', e => {
      this.toggleCard();
    });
  }

  // Called when element is inserted in DOM
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
    // Current document needs to be defined to get DOM access to imported HTML

    shadowRoot.appendChild(template.content.cloneNode(true));
//document.body.appendChild(templateContent);


    // Extract the attribute user-id from our element.
    // Note that we are going to specify our cards like:
    // <user-card user-id="1"></user-card>
    const userId = this.getAttribute('user-id');

    // Fetch the data for that user Id from the API and call the render method with this data
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.text())
      .then((responseText) => {
        this.render(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(userData) {
    // Fill the respective areas of the card using DOM manipulation APIs
    // All of our components elements reside under shadow dom. So we created a this.shadowRoot property
    // We use this property to call selectors so that the DOM is searched only under this subtree
    this.shadowRoot.querySelector('.card__full-name').innerHTML = userData.name;
    this.shadowRoot.querySelector('.card__user-name').innerHTML = userData.username;
    this.shadowRoot.querySelector('.card__website').innerHTML = userData.website;
    this.shadowRoot.querySelector('.card__address').innerHTML = `<h4>Address</h4>
      ${userData.address.suite}, <br />
      ${userData.address.street},<br />
      ${userData.address.city},<br />
      Zipcode: ${userData.address.zipcode}`
  }

  toggleCard() {
    let elem = this.shadowRoot.querySelector('.card__hidden-content');
    let btn = this.shadowRoot.querySelector('.card__details-btn');

    // if elem has "card __block-content" class, remove class, otherwise add it.
    elem.classList.toggle('card__block-content');
    // if elem has "card __block-content" class, the text of button will be "Less Details",
    // otherwise will be "More Details"
    btn.innerHTML = elem.classList.contains('card__block-content') ? 'Less Details' : 'More Details';
  }
}

customElements.define('feedback-widget', UserCard);