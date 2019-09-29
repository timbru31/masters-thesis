hljs.registerLanguage("django",function(e){var t={b:/\|[A-Za-z]+:?/,k:{name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"},c:[e.QSM,e.ASM]};return{aliases:["jinja"],cI:!0,sL:"xml",c:[e.C(/\{%\s*comment\s*%}/,/\{%\s*endcomment\s*%}/),e.C(/\{#/,/#}/),{cN:"template-tag",b:/\{%/,e:/%}/,c:[{cN:"name",b:/\w+/,k:{name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"},starts:{eW:!0,k:"in by as",c:[t],r:0}}]},{cN:"template-variable",b:/\{\{/,e:/}}/,c:[t]}]}});
hljs.registerLanguage("haskell",function(e){var i={v:[e.C("--","$"),e.C("{-","-}",{c:["self"]})]},a={cN:"meta",b:"{-#",e:"#-}"},l={cN:"meta",b:"^#",e:"$"},c={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n={b:"\\(",e:"\\)",i:'"',c:[a,l,{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TM,{b:"[_a-z][\\w']*"}),i]},s={b:"{",e:"}",c:n.c};return{aliases:["hs"],k:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",c:[{bK:"module",e:"where",k:"module where",c:[n,i],i:"\\W\\.|;"},{b:"\\bimport\\b",e:"$",k:"import qualified as hiding",c:[n,i],i:"\\W\\.|;"},{cN:"class",b:"^(\\s*)?(class|instance)\\b",e:"where",k:"class family instance where",c:[c,n,i]},{cN:"class",b:"\\b(data|(new)?type)\\b",e:"$",k:"data family type newtype deriving",c:[a,c,n,s,i]},{bK:"default",e:"$",c:[c,n,i]},{bK:"infix infixl infixr",e:"$",c:[e.CNM,i]},{b:"\\bforeign\\b",e:"$",k:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",c:[c,e.QSM,i]},{cN:"meta",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},a,l,e.QSM,e.CNM,c,e.inherit(e.TM,{b:"^[_a-z][\\w']*"}),i,{b:"->|<-"}]}});
hljs.registerLanguage("rust",function(e){var t="([ui](8|16|32|64|128|size)|f(32|64))?",r="alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default",n="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";return{aliases:["rs"],k:{keyword:r,literal:"true false Some None Ok Err",built_in:n},l:e.IR+"!?",i:"</",c:[e.CLCM,e.C("/\\*","\\*/",{c:["self"]}),e.inherit(e.QSM,{b:/b?"/,i:null}),{cN:"string",v:[{b:/r(#*)"(.|\n)*?"\1(?!#)/},{b:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{cN:"symbol",b:/'[a-zA-Z_][a-zA-Z0-9_]*/},{cN:"number",v:[{b:"\\b0b([01_]+)"+t},{b:"\\b0o([0-7_]+)"+t},{b:"\\b0x([A-Fa-f0-9_]+)"+t},{b:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+t}],r:0},{cN:"function",bK:"fn",e:"(\\(|<)",eE:!0,c:[e.UTM]},{cN:"meta",b:"#\\!?\\[",e:"\\]",c:[{cN:"meta-string",b:/"/,e:/"/}]},{cN:"class",bK:"type",e:";",c:[e.inherit(e.UTM,{endsParent:!0})],i:"\\S"},{cN:"class",bK:"trait enum struct union",e:"{",c:[e.inherit(e.UTM,{endsParent:!0})],i:"[\\w\\d]"},{b:e.IR+"::",k:{built_in:n}},{b:"->"}]}});