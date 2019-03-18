import React, { Component } from 'react';
import '../themes/volunteer.css';
import '../themes/animate.css';
import sosconfJPG from '../images/sosconf.jpg';

class Comming extends Component { 
  render() {
    return (
      <div className="sosconf-volunteer__wrap">
        <div className="sosconf-volunteer__text">
            Welcome to be a volunteer
        </div>
        <div className="sosconf-volunteer__card-group">
            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>技术组</span>
                </div>
                <div className="sosconf-volunteer__card-text">
                    <p>技术组志愿者需求</p>
                    <p>按照当前的进度考虑和技术复杂度, 以及考虑在开发中培养更多同学的技术能力, 技术组目前计划人员需求如下:</p>
                    <ul>
                        <li>前端组</li>
                        <li>后端组</li>
                        <li>前端设计小组(包含UI)</li>
                        <li>运维(包含各种注册/查询系统维护)</li>
                        <li>萌新若干</li>
                    </ul>
                    <p>技术组同学主要负责开发：</p>
                    <ul>
                        <li>sosconf网站</li>
                        <li>sosconf志愿者管理系统</li>
                        <li>sosconf票务系统</li>
                        <li>sosconf系统维护</li>
                        <li>会议现场紧急技术支持</li>
                        <li>LDAP统一认证系统接入支持</li>
                        <li>DevOps及sosconf集群维护</li>
                    </ul>

                    <p>注: 其中DevOps部分由后端组配合运维组共同维护</p>
                    <p>以上为考虑中较为合理的配置, 并且包含想要通过技术组工作锻炼的萌新</p>
                    <p>上述人数需求并非硬性限制, 如果有更多同学也欢迎加入我们技术组的开发工作(欢迎萌新)</p>
                </div>
            </div>

            <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>设计组</span>
                </div>
                <div className="sosconf-volunteer__card-text">
                

                    <p>设计组是一个（可能）偏离技术路线，但对于活动的举办有锦上添花的作用的画风清奇小组。</p>
                    <p>人员要求：</p>
                    <ul>
                        <li>不鸽（分配的任务可以及时完成）</li>
                        <li>善于交流思路，说出想法</li>
                        <li>不介意真的是萌新还是假装自己是萌新的同学</li>
                        <li>无人数要求</li>
                    </ul>

                    <p>具体的工作有：</p>
                    <ul>
                        <li>视频剪辑</li>
                        <li>宣传资料设计，如海报、宣传单、展板……</li>
                        <li>网页设计和手机应用界面设计</li>
                        <li>纪念品设计</li>
                        <li>会场主视觉设计</li>
                        <li>其他有新奇创意的设计（emm）</li>
                    </ul>

                    <p>
                    技能要求（以下要求全是可选项）：
                    </p>

                    <ul>
                        <li>会使用PS、AI或ID来制作宣传资料（当然，熟练使用GIMP那类的开源软件也可以）</li>
                        <li>会使用Pr、AE等软件来剪辑视频</li>
                        <li>Keynote或者PowerPoint</li>
                        <li>电脑绘画</li>
                        <li>会使用科学上网</li>
                    </ul>
                    <p>如果以上技能都没有……也没有关系，只要有兴趣和毅力就可以加入，我们可以带你🤣</p>
                    <p>以上配置不一定完全合理且周到，欢迎有兴趣的同学联系。</p>
                </div>
            </div>
            <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>市场组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text">
                        <p>我们希望你：</p>
                        <ul>
                            <li>有良好的沟通表达能力及人际交往能力</li>
                            <li>善于合作以及协调</li>
                            <li>有较强的责任感，执行力强</li>
                            <li>有创造力及较强思维逻辑能力，能够提出想法</li>
                        </ul>
                        <p>具体的工作：</p>
                        <ul>
                            <li>协助构建大会品牌，并将其推广出去</li>
                            <li>吸引更多喜欢开源开发和文化或对开源感兴趣的人们参与到大会中</li>
                            <li>后期进行调查，为下一届大会提供改进意见</li>
                        </ul>
                        <p>欢迎有兴趣的同学加入，我们一起努力！</p>
                    </div>
                </div>
        </div>
        <div className="sosconf-volunteer__card-group">

                <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>媒体组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text">
                        <p>我们希望你：</p>
                        <ul>
                            <li>有良好的沟通表达能力及人际交往能力</li>
                            <li>善于合作以及协调</li>
                            <li>熟悉国内外常用社交媒体平台</li>
                            <li>热情积极，活泼机智</li>
                        </ul>
                        <p>具体的工作：</p>
                        <ul>
                            <li>了解大会实时动向</li>
                            <li>能够发挥自己的聪明才智做好大会的宣传工作</li>
                            <li>做大会的小喇叭和代言人o(*￣︶￣*)o</li>
                        </ul>
                        <p>欢迎各位同学加入！</p>
                    </div>
                </div>

                <div className="sosconf-volunteer__card">
                <div className="sosconf-volunteer__card-header">
                    <span>议程组</span>
                </div>
                <div className="sosconf-volunteer__card-text">
                    <p>和我们一起创作第一次学生开源年会，见证历史。</p>
                    <p>需求</p>
                    <ul>
                        <li>喜欢开源开发和文化或对开源感兴趣。</li>
                        <li>喜欢团队合作。</li>
                        <li>有相关经验者优先。</li>
                        <li>认同我们的目标并有意长期和我们合作者优先！</li>
                    </ul>

                    <p>工作</p>
                    <ul>
                        <li>在前期准备中，我们将一起根据赞助商和讲者招募情况创建多个版本的议程时间表。</li>
                        <li>我们会评估各类可能影响会议顺利开展的不确定性和风险，并准备相应的应对计划。</li>
                        <li>我们会一起策划一些将随会议进行同时开展的具体项目（如学生开源项目展览），并和其他相关小组研究可行性。</li>
                    </ul>
                    <p>收获</p>
                    <ul>
                        <li>本次会议将是一次最独特的学习经历，你也能免费参与会议，并得到志愿者专属的赠品。</li>
                    </ul>
                </div>
            </div>
            <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>赞助组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text">
                        <p>赞助组主要负责对外联系潜在的赞助商，赞助交涉和招募启动资金，也会行使一部分联系媒体或社区的职能。（是 sosconf 联系社会的纽带）</p>
                        <p>人员要求</p>
                        <ul>
                            <li>不限国籍</li>
                            <li>学生身份（不限于中学生、大学生、硕博生、留学生</li>
                            <li>善于交流思路，口头表达能力较好</li>
                            <li>具备一定的社交礼仪（现实 or 网络</li>
                            <li>无人数要求</li>
                        </ul>
                        <p>技能要求（除了外语水平是硬性需求，其他均是可选项）</p>
                        <ul>
                            <li>英语六级 & 雅思5分及以上 & 托福60分及以上（满足任一条件即可</li>
                            <li>口语流利和不怯场，能够同外国人进行一般及以上程度的的交流</li>
                            <li>外语&法律/金融/计算机相关背景的同学（优先级从左到右依次排列，前两者是并列关系，起草赞助合同需要法学背景的同学帮忙</li>
                            <li>会科学上网（约定使用统一的沟通模式，邮件+Skype</li>
                            <li>撰写文案能力较强，思维活跃</li>
                        </ul>
                        <p>具体的工作</p>
                        <ul>
                            <li>制定年度 Call for Sponsors</li>
                            <li>牵头起草赞助合同</li>
                            <li>联系赞助商，与赞助商进行谈判，尽力促成赞助（每个人负责哪几家公司，跟进哪几条线索</li>
                            <li>作为赞助商、媒体、社区三者之间的纽带，协助其他组共同推进事务进度</li>
                            <li>运营和维护赞助商及合作伙伴的良好关系</li>
                        </ul>
                        <p>以上配置不一定完全合理且周到，欢迎有兴趣的同学加入并提出建议！</p>
                    </div>
                </div>

        </div>

        <div className="sosconf-volunteer__card-group">
                <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>机动组</span>
                    </div>
                    <div className="sosconf-volunteer__card-text">
                        <p>我们的口号是 ：我是革命一块砖，哪里需要哪里搬！</p>
                        <p>也许上述并没有你感兴趣的工作，要这样子错失了认识更多志同道合的小伙伴的机会了吗？NO！Whatever，你可以做什么，你想要做什么，尽管讲出来~ </p>
                        <p>只要你喜欢开源开发和文化或对开源感兴趣，只要你愿意加入我们，just try!</p>
                    </div>
                </div>
                <div className="sosconf-volunteer__card--none sosconf-volunteer__card">
                </div>
                <div className="sosconf-volunteer__card--none sosconf-volunteer__card">
                </div>
        </div>

        <div className="sosconf-volunteer__card-group">
            <div className="sosconf-volunteer__card">
                    <div className="sosconf-volunteer__card-header">
                        <span>志愿者福利</span>
                    </div>
                    <div className="sosconf-volunteer__card-text sosconf-volunteer__card-text--big">
                        <ul>
                            <li>获得免费参与sosconf 2019的资格 </li>
                            <li>与会志愿者将由组委会负责午餐或餐补</li>
                            <li>官方志愿者证书</li>
                            <li>sosconf 2019志愿者纪念品礼包 </li>
                            <li>与国内外技术大神交流的宝贵经历、与国外社区活跃者成为知己好友的机会</li>
                            <li>通过此次参与国际开源会议的机会，更有可能获得国外知名企业的认可</li>
                            <li>优秀的志愿者将有机会由组委会承担部分费用前往美国洛杉矶南加州大学参会</li>
                        </ul>
                        <p>联系方式：</p>
                        <p>QQ群：928111041</p>
                        <p>电报群：https://t.me/joinchat/LK3swBM0tPqV-nR8BwrLUA</p>
                        <p>微信群：</p>
                        <img src={sosconfJPG} className="sosconf-volunteer__card-image"/>
                    </div>
            </div>
        </div>

        <div className="sosconf-volunteer__button-group">
            <a target="_black" href="https://wj.qq.com/s2/3377452/b8e9/" className="animated bounce">APPLY</a>
        </div>
      </div>
    );
  }
}

export default Comming;