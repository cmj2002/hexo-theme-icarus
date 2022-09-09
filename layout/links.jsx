const moment = require('moment');
const { Component, Fragment } = require('inferno');
const Paginator = require('hexo-component-inferno/lib/view/misc/paginator');
const ArticleMedia = require('hexo-component-inferno/lib/view/common/article_media');
const Comment = require('./common/comment');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;
        const { article, plugins } = config;
        const { url_for, __, has_thumbnail, get_thumbnail, date_xml, date } = helper;

        const language = page.lang || page.language || config.language;
        
        return <Fragment>
        <div class="card">
                    <div class="card-content">
                        <p>友链</p>
                    </div>
                </div>

                <div class="card" id="apps-links-load-tips">
                    <div class="card-content">
                        <h2 class="tag is-primary">FRIENDS</h2>
                        <p><strong>加载中，请稍候…</strong></p>
                    </div>           
                </div>     

                <div class="card hidden" id="apps-links-info" style="display:none">
                    <div class="card-content">
                        <h2 class="tag is-primary">FRIENDS</h2>
                        <div class="timeline" id="app-links"></div>
                    </div>
                    <noscript>请启用 JavaScript 后 <a href="/links/">再尝试重新载入此页面</a></noscript>
                </div>

                <script src={url_for('/js/getLinks.js')}></script>
                
                <br/><div class="card" id="my-links-info">
                    <div class="card-content" >
                        <p>如果希望和我交换友链，请通过评论、邮箱或其他方式提供：</p>
                        <ul class=".content ul" style={{
                            'list-style': "disc outside",
                            'margin-left': "2em!important",
                            'margin-top': "1em!important",
                        }}> 
                            <li>您的网址</li>
                            <li>您的昵称</li>
                            <li>网站图标url</li>
                            <li>简介</li>
                        </ul>
                        <br/><p>本站信息（亦是参考格式）：</p>
                        <ul class=".content ul" style={{
                            "word-wrap": "break-word",
                            'list-style': "disc outside",
                            'margin-left': "2em!important",
                            'margin-right': "2em!important",
                            'margin-top': "1em!important",
                        }}> 
                            <li><strong>网址：</strong><a href="https://blog.caomingjun.com">https://blog.caomingjun.com</a></li>
                            <li><strong>昵称：</strong>曹明隽</li>
                            <li><strong>网站图标url：</strong><a href="https://blog.caomingjun.com/img/cmj_avatar.png">https://blog.caomingjun.com/img/cmj_avatar.png</a></li>
                            <li><strong>简介/Slogan：</strong>开源创造未来</li>
                        </ul>
                        <br/><p>你也可通过 JavaScript 加载 <a href="https://blog.caomingjun.com/slogan.txt">https://blog.caomingjun.com/slogan.txt</a> 获取最新的 slogan(utf-8编码)，这样在 slogan 发生更改时不需要手动修改网页。<strong>若要通过 JavaScript 显示 slogan，请注意对特殊字符的转义</strong>。</p>
                        <br/><p>提交友链信息后我将尽快更新页面并展示您的网页</p>
                    </div>         
                </div>

                {<Comment config={config} page={page} helper={helper} />}

                </Fragment> ;}
};