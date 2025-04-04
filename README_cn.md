# TuGraph Analytics 文档地图

[![Star](https://shields.io/github/stars/tugraph-family/tugraph-analytics?logo=startrek&label=Star&color=yellow)](https://github.com/TuGraph-family/tugraph-analytics/stargazers)
[![Fork](https://shields.io/github/forks/tugraph-family/tugraph-analytics?logo=forgejo&label=Fork&color=orange)](https://github.com/TuGraph-family/tugraph-analytics/forks)
[![Contributor](https://shields.io/github/contributors/tugraph-family/tugraph-analytics?logo=actigraph&label=Contributor&color=abcdef)](https://github.com/TuGraph-family/tugraph-analytics/contributors)
[![Commit](https://badgen.net/github/last-commit/tugraph-family/tugraph-analytics/master?icon=git&label=Commit)](https://github.com/TuGraph-family/tugraph-analytics/commits/master)
[![Docker](https://shields.io/docker/pulls/tugraph/geaflow-console?logo=docker&label=Docker&color=blue)](https://hub.docker.com/r/tugraph/geaflow-console/tags)
[![License](https://shields.io/github/license/tugraph-family/tugraph-analytics?logo=apache&label=License&color=blue)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Release](https://shields.io/github/v/release/tugraph-family/tugraph-analytics.svg?logo=stackblitz&label=Version&color=red)](https://github.com/TuGraph-family/tugraph-analytics/releases)
[![CN](https://shields.io/badge/Docs-中文-blue?logo=readme)](https://tugraph-analytics.readthedocs.io/en/latest/docs-cn/introduction/)
[![EN](https://shields.io/badge/Docs-English-blue?logo=readme)](https://tugraph-analytics.readthedocs.io/en/latest/docs-en/introduction/)
[![Blog](https://badgen.net/static/Blog/github.io/orange?icon=rss)](https://tugraph-analytics.github.io/)

> 🌐️ 中文 | [English](README.md)

<!--intro-start-->
## 介绍
**TuGraph Analytics** (别名：GeaFlow) 是蚂蚁集团开源的流图计算引擎，支持万亿级图存储、图表混合处理、实时图计算、交互式图分析等核心能力，目前广泛应用于数仓加速、金融风控、知识图谱以及社交网络等场景。

关于GeaFlow更多介绍请参考：[GeaFlow介绍文档](docs/docs-cn/source/2.introduction.md)

GeaFlow设计论文参考：[GeaFlow: A Graph Extended and Accelerated Dataflow System](https://dl.acm.org/doi/abs/10.1145/3589771)

## 特性

* 分布式实时图计算
* 图表混合处理（SQL+GQL语言）
* 统一流批图计算
* 万亿级图原生存储
* 交互式图分析
* 高可用和Exactly Once语义
* 高阶API算子开发
* UDF/图算法/Connector插件支持
* 一站式图研发平台
* 云原生部署

## 快速上手
第一步 打包jar包并提交quick start任务

1. 准备Git、JDK8、Maven、Docker环境。
2. 下载源码：`git clone https://github.com/TuGraph-family/tugraph-analytics`
3. 项目构建：`./build.sh --module=geaflow --output=package`
4. 测试任务：`./bin/gql_submit.sh --gql geaflow/geaflow-examples/gql/loop_detection_file_demo.sql` 

第二步 启动控制台，体验白屏提交quick start任务

5. 构建控制台jar和镜像(需启动Docker)：`./build.sh --module=geaflow-console`
6. 启动控制台：`docker run -d --name geaflow-console -p 8888:8888 geaflow-console:0.1`

更多详细内容请参考：[快速上手文档](docs/docs-cn/source/3.quick_start/1.quick_start.md)。

## 开发手册

GeaFlow支持DSL和API两套编程接口，您既可以通过GeaFlow提供的类SQL扩展语言SQL+ISO/GQL进行流图计算作业的开发，也可以通过GeaFlow的高阶API编程接口通过Java语言进行应用开发。
* DSL应用开发：[DSL开发文档](docs/docs-cn/source/5.application-development/2.dsl/1.overview.md)
* API应用开发：[API开发文档](docs/docs-cn/source/5.application-development/1.api/guid.md)

## 实时能力

相比传统的流式计算引擎比如Flink、Storm这些以表为模型的实时处理系统而言，GeaFlow以图为数据模型，在处理Join关系运算，尤其是复杂多跳的关系运算如3跳以上的Join、复杂环路查找上具备极大的性能优势。

[![total_time](docs/static/img/vs_join_total_time_cn.jpg)](docs/docs-cn/source/reference/vs_join.md)

[为什么使用图进行关联运算比表Join更具吸引力？](docs/docs-cn/source/reference/vs_join.md)

基于GQL的关联分析Demo：

```roomsql
--GQL Style
Match (s:student)-[sc:selectCource]->(c:cource)
Return c.name
;
```

基于SQL的关联分析Demo：

```roomsql
--SQL Style
SELECT c.name
FROM course c JOIN selectCourse sc 
ON c.id = sc.targetId
JOIN student s ON sc.srcId = s.id
;
```

## 参与贡献
非常感谢您参与到 GeaFlow 的贡献中来，无论是Bug反馈还是文档完善，或者是大的功能点贡献，我们都表示热烈的欢迎。

具体请参考：[参与贡献文档](docs/docs-cn/source/9.contribution.md)。

**如果您对GeaFlow感兴趣，欢迎给我们项目一颗[ ⭐️ ](https://github.com/TuGraph-family/tugraph-analytics)。**

## 联系我们
您可以通过以下方式联系我们。

![contacts](docs/static/img/contacts.png)

## 致谢
GeaFlow 开发过程中部分模块参考了一些业界优秀的开源项目，包括 Apache Flink、Apache Spark 以及 Apache Calcite 等, 这里表示特别的感谢。也感谢对 GeaFlow 做过贡献的个人开发者，名单如下：

<a href="https://github.com/TuGraph-family/tugraph-analytics/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TuGraph-family/tugraph-analytics" />
</a>

生成 By [contrib.rocks](https://contrib.rocks).
<!--intro-end-->
<!--intro-end-->
