FROM gitpod/workspace-full:latest

RUN bash -c 'VERSION="18" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

RUN sudo apt-get update && sudo apt-get upgrade -y
RUN sudo apt-get install -y firefox
RUN cargo install wasm-pack
