!function links(target, getFor ) {
    var load, loadwerror, jsonTarget, name, blogLink, imageUrl, targetTemp = target.getElementById("app-links");
    jsonTarget = "/js/friends.json",
    name = function(e) {
        var name, blogLink, imageUrl, slogan, content = "";
        for (var o in e) {
            var count = e[o];
            blogLink = count.url;
            blogLink = blogLink.replace('https://', '');
            if (blogLink.endsWith("/")) {
                blogLink = blogLink.substring(0,blogLink.length - 1);
            }          
            content += (name = o, blogLink, imageUrl = count.img, slogan = count.text, `<article class="media"><a class="media-left" href="${count.url}" target="_blank"><p class="image is-64x64"><img class="thumbnail" src="${imageUrl}" alt="${name}" onerror="javascript:this.src='img/loading.gif';"></p></a><div class="media-content size-small"><p><a class="link-muted" href="${count.url}" target="_blank">${blogLink}</a></p><p class="title is-6"><a class="link-muted" href="${count.url}" target="_blank">${name}</a></p><p><a class="link-muted" href="${count.url}" target="_blank">${slogan}</a></p></div></article>`)
        }
        getFor(function() {
            targetTemp.innerHTML = content;
            target.getElementById("apps-links-load-tips").style.display='none',
            target.getElementById("apps-links-info").style.display='block';
        })
    },
    loadwerror = function() {
        targetTemp.innerHTML = '<p class="title tips">加载失败，请 <a href="/links/">刷新</a> 重试！</p>'
    },
    (load = new XMLHttpRequest).open("GET", encodeURI(jsonTarget), !0),
    load.onload = function() {
        var e;
        200 <= load.status && load.status < 300 || 304 === load.status ? (e = JSON.parse(load.responseText), name(e)) : loadwerror()
    },
    load.timeout = 4500,
    load.ontimeout = blogLink,
    load.onerror = blogLink,
    load.send()
} (document, window.requestAnimationFrame)