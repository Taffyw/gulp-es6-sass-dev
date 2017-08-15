/**
 * 将tasks文件夹引入 gulp会通过找default.js任务以及关联到其他任务
 * 任务名称 === js名称
 */
import requireDir from 'require-dir'
requireDir('./tasks');