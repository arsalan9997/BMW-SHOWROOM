pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/arsalan9997/BMW-SHOWROOM.git'
            }
        }

        stage('Maven Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build --no-cache -t bmw:v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f bmw-back || true'
            }
        }

        stage('Start New Container') {
            steps {
                sh '''
                docker run -d \
                  --name bmw-back \
                  --add-host=host.docker.internal:host-gateway \
                  -p 8081:8081 \
                  bmw:v1
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                sleep 15
                curl -f http://localhost:8081 || exit 1
                '''
            }
        }
    }
}
