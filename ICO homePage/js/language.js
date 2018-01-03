$.lang = {};

$.lang.en = {
	0: 'White Paper',
	1: 'Team Members',
	2: 'FAQ',
	3: 'Contact US',
	4: 'Language',
	5: 'ICO ENDS IN',

};

$.lang.ko = {
	0: '백서',
	1: '팀원',
	2: '자주하는 질문',
	3: '연락',
	4: '언어',
	5: 'ICO 종료',
};

$.lang.pt ={
	0: 'Portuguese',
	1: 'Portuguese',
	2: 'Portuguese',
	3: 'Portuguese',
	4: 'Portuguese',
	5: 'Portuguese',
};

$.lang.cn ={
	0: 'chinese',
	1: 'chinese',
	2: 'chinese',
	3: 'chinese',
	4: 'chinese',
	5: 'chinese',
};

$.lang.jp ={
	0: 'japanese',
	1: 'japanese',
	2: 'japanese',
	3: 'japanese',
	4: 'japanese',
	5: 'japanese',
};

function setLanguage(currentLanguage){
	$('[data-langNum]').each(function(){
		var $this = $(this);
		$this.html($.lang[currentLanguage][$this.data('langnum')]);
	});
}

$('ul.language_menu li').click(function(){
	var lang = $(this).data('lang');
	setLanguage(lang);

	$('html').attr('lang', lang);
	
});