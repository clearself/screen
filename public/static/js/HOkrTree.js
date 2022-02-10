/**
 * 北京万古科技股份有限公司 横向组织架构图
 * author:abbe.fan@vgtech.com.cn
 * email:141816554909@qq.com
 */

/* eslint-disable */
!(function(name, factory) {
    try {
        if ($) {}
    } catch (error) {
        console.warn(error + '【本项目需要依赖jquery库】')
        return
    }
    if (typeof exports === 'object') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) {
        define(factory)
    } else {
        window[name] = factory()
    }
})('HOkrTree', function() {
    var namespace = 'HOkrTree'
    var dataArray = []
    var cssNameSpace = ''
    var tagCalpack = null
    var itemCallback = null

    function buildNode(data) {
        /** js-core**/
        var template = function(data, root, tag_index, z_type) {
            var s = ''
            var len = data.length
            $.each(data, function(index, item) {
                var tag = ''
                var zr = ''
                var tagIndex = 0
                /* 提前 处理tag标记*/
                item.children && $.each(item.children, function(index, item1) {
                    if (item1.type && item1.type == 'tag') {
                        // tag = `<div class="tagBox">
                        //         <div class="tagNode">
                        //             <div class="tag-line"><div class="taglineDown"></div></div>
                        //              <div class="tag-node">
                        //                   ${tagCalback&&tagCalback(item1)}
                        //             </div>

                        //         </div>
                        //     </div>`;
                        tag = '<div class="tagBox">\n                                                <div class="tagNode">\n                                                    <div class="tag-line"><div class="taglineDown"></div></div>\n                                                     <div class="tag-node">\n                                                          '.concat(tagCalpack && tagCalpack(item1), '\n                                                    </div>\n                                                     \n                                                </div>\n                                            </div>')
                        if (item.children.length > 1 && index == 0) {
                            tagIndex = 1
                            zr = 'top'
                        } else {
                            (item.children.length - 1 == index) && (tagIndex = item.children.length - 2, zr = 'bottom')
                        }
                    }
                })
                if (item.type && item.type == 'tag') return

                /** end**/
                //     s += `<div class="node-cell">
                //     ${
                //     !item.children||item.children.length==0?`<div class="node">${itemCallback&&itemCallback(item)}</div><div class="node-lines"><div class="line-top${(index==0||(z_type=='top'&&index==tag_index))&&" first"||''}"></div><div class="line-bottom${(index==len-1||(z_type=='bottom'&&index==tag_index))&&" last"||''}"></div></div>`:
                //       `<div class="node-parent">
                //             <div class="node">${itemCallback&&itemCallback(item)}</div>
                //             <div class="node-lines" ${root&&`style="display:none"`}>
                //                 <div class="line-top${(index==0||(z_type=='top'&&index==tag_index))&&" first"||''}"></div>
                //                 <div class="line-bottom${(index==len-1||(z_type=='bottom'&&index==tag_index))&&" last"||''}"></div>
                //             </div>
                //         </div>
                //         <div class="expandIcon">
                //             <div class="click-icon">-</div>
                //         </div>
                //         ${tag}
                //             <div class="line"><div class="line-right"></div></div>
                //             <div class="node-childrens">${template(item.children,false,tagIndex,zr)}</div>`
                //     }
                //    </div>`;

                s += '<div class="node-cell">\n                                '.concat(!item.children || item.children.length == 0 ? '<div class="node">'.concat(itemCallback && itemCallback(item), '</div><div class="node-lines"><div class="line-top').concat((index == 0 || z_type == 'top' && index == tag_index) && ' first' || '', '"></div><div class="line-bottom').concat((index == len - 1 || z_type == 'bottom' && index == tag_index) && ' last' || '', '"></div></div>') : '<div class="node-parent">\n                                        <div class="node">'.concat(itemCallback && itemCallback(item), '</div>\n                                        <div class="node-lines" ').concat(root && 'style="display:none"', '>\n                                            <div class="line-top').concat((index == 0 || z_type == 'top' && index == tag_index) && ' first' || '', '"></div>\n                                            <div class="line-bottom').concat((index == len - 1 || z_type == 'bottom' && index == tag_index) && ' last' || '', '"></div>\n                                        </div>\n                                    </div>\n                                    <div class="expandIcon">\n                                        <div class="click-icon">-</div>\n                                    </div>\n                                    ').concat(tag, '\n                                        <div class="line"><div class="line-right"></div></div>\n                                        <div class="node-childrens">').concat(template(item.children, false, tagIndex, zr), '</div>'), '\n                               </div>')
            })
            return s
        }
        return template(data, true)
    }

    function renderLayout() {
        $(cssNameSpace).html(buildNode(dataArray))
        $(cssNameSpace + ' .tagNode').each(function(index, item) {
            $(item).css({
                height: $(item).height() * 2 + 100 + 'px'
            })
        })
    }

    function initEvent() {
        $(cssNameSpace + ' .expandIcon>div').on('click', function() {
            if ($(this).text() == '+') {
                $(this).text('-')
            } else {
                $(this).text('+')
            }
            $(this).parent().nextAll().toggle(120)
        })
    }

    function init() {
        renderLayout()
        initEvent()
    }
    $.fn[namespace] = function(options) {
        cssNameSpace = this.selector
        var defaults = {
            version: '1.0',
            isdrop: true,
            data: [],
            css: {
                lineColor: '#cbcbcb',
                iconColor: '#cbcbcb'
            },
            style: document.createElement('style')
        }
        var lineWidth = 200;
        var opts = $.extend({}, defaults, options)
        var style = ''.concat(cssNameSpace, ' .node-parent,').concat(cssNameSpace, ' .node-childrens{display:table-cell;height:100%;vertical-align:middle}').concat(cssNameSpace, ' .node{box-sizing:border-box}').concat(cssNameSpace, ' .node-cell{position:relative;padding: 0 10px;padding-left:'+lineWidth+'px}').concat(cssNameSpace, ' .node-lines{position:absolute;left:0;height:100%;top:0}').concat(cssNameSpace, ' .line{display:table-cell;vertical-align:middle}').concat(cssNameSpace, ' .line>.line-right{width:'+lineWidth+'px;border-bottom:solid 1px ').concat(opts.css.lineColor, '}').concat(cssNameSpace, ' .line-top,').concat(cssNameSpace, ' .line-bottom{height:50%;border-left:solid 1px ').concat(opts.css.lineColor, ';width:'+lineWidth+'px;box-sizing:border-box}').concat(cssNameSpace, ' .expandIcon{display:table-cell;vertical-align:middle}').concat(cssNameSpace, ' .expandIcon>div{display:inline-block;height:20px;width:20px;background:').concat(opts.css.iconColor, ';color:#333;font-size:12px;line-height:18px;border-radius:50%;position:relative;top:0px;cursor:pointer;text-align:center}').concat(cssNameSpace, ' .line-top{border-bottom:solid 1px ').concat(opts.css.lineColor, '}').concat(cssNameSpace, ' .line-top.first{border:0;border-bottom:solid 1px ').concat(opts.css.lineColor, '}').concat(cssNameSpace, ' .line-bottom.last{border:0}').concat(cssNameSpace, ' .tagBox{display:table-cell;vertical-align:middle}').concat(cssNameSpace, ' .tagNode{position:relative}').concat(cssNameSpace, ' .tag-line{height:50px;border-bottom:solid 1px ').concat(opts.css.lineColor, ';box-sizing:border-box;position:absolute;top:50%;margin-top:-50px;width:100%}').concat(cssNameSpace, ' .tag-node{}').concat(cssNameSpace, ' .taglineDown{width:0;border-left:solid 1px ').concat(opts.css.lineColor, ';height:100%;margin:auto}')
        this.addClass(namespace)
        opts.style.innerHTML = style
        document.getElementsByTagName('head')[0].appendChild(opts.style)
        dataArray = opts.data instanceof Array && opts.data
        typeof opts.itemTemplate == 'function' && (itemCallback = opts.itemTemplate)
        typeof opts.tagTemplate == 'function' && (tagCalpack = opts.tagTemplate)
        typeof opts.isdrop == 'boolean' && (isdrop = opts.isdrop)
        init()
        return opts
    }
})
