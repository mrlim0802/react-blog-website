import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const scssLoader = {
        test: /\.s?[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                      },
                }
            },
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        tsLoader,
        scssLoader
    ]
};