touch ~/.bashrc # Linux 不需要
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm install v10.1.0
nvm use v10.1.0
sudo npm install yarn cnpm -g 
sudo cnpm install react-scripts -g #测试之后，使用npm安装递归非常大的依赖解决方案是使用cnpm
yarn install
npm run build
