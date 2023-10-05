"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[348],{2585:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=a(2208),r=a(9161),i=(a(4159),a(4758)),s=["components"],o={},l="Laravel",c={unversionedId:"Examples/Laravel",id:"Examples/Laravel",title:"Laravel",description:"Here is a sample code to render the content of the block inside Laravel. Every page component is rendered with a view named after the identifier with passing the data as variables with an additional fields variable containing all the fields.",source:"@site/docs/Examples/Laravel.md",sourceDirName:"Examples",slug:"/Examples/Laravel",permalink:"/visual-editor/docs/Examples/Laravel",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/Examples/Laravel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tabs",permalink:"/visual-editor/docs/Fields/Layout/Tabs"},next:{title:"Create templates",permalink:"/visual-editor/docs/templates"}},d={},p=[],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"laravel"},"Laravel"),(0,i.kt)("p",null,"Here is a sample code to render the content of the block inside Laravel. Every page component is rendered with a view named after the identifier with passing the data as variables with an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," variable containing all the fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class BlockRenderer\n{\n\n    /* \n    *  Interceptors acts as middlewares\n    *  and can transform the data with\n    *  the inject(string $blocName, array $data) method\n    */ \n    private static $interceptors = [\n        'my-block' => MyBlockInterceptor::class,\n    ];\n\n    public static function render($blocs): string\n    {\n        if (is_string($blocs)) {\n            $blocs = json_decode($blocs, true);\n        }\n        return collect($blocs)->map(function ($bloc) {\n            return self::renderBlock($bloc);\n        })->join('');\n    }\n\n    private static function renderBlock(array $data): string\n    {\n        $request = request();\n        $blocName = $data['_name'];\n        $data['isPreview'] = false;\n        if (isset(self::$interceptors[$blocName])) {\n            $data = app(self::$interceptors[$blocName])->inject($blocName, $data);\n        }\n        if ($request->route()->getName() === 'preview') {\n            $data['isPreview'] = true;\n        }\n        return view(\"front.blocs.{$blocName}\", array_merge(['fields' => $data], $data))->render();\n    }\n    \n}\n")))}m.isMDXComponent=!0}}]);