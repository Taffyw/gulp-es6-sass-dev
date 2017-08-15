/**
 * Created by wangtf on 2017/5/16.
 */
import yargs from 'yargs';

const args = yargs

    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch file changes'
    })
    .option('build',{
        boolean:true,
        default:false,
        describe:'uglify css and js'
    })
    .option('port',{
        Number:true,
        default:2017,
        describe:'server port'
    })
    .argv

export default args;