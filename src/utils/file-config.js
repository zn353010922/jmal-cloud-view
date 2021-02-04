import fileApi from '@/api/file-api'

export default {

  baseUrl: '/api',
  previewUrl: function(username, file) {
    return `${this.baseUrl}/file/${username}${file.path}${file.name}`
  },
  mardownPreviewUrl: function (path){
    return window.location.origin + `${this.baseUrl}${path}`
  },
  publicPreviewUrl: function(fileIds) {
    return `${this.baseUrl}/public/preview/${fileIds}`
  },
  preview: function(username, file) {
    const url = this.previewUrl(username, file)
    console.log(url)
    window.open(url, '_blank')
  },
  publicPreview: function(fileIds) {
    const url = this.publicPreviewUrl(fileIds)
    window.open(url, '_blank')
  },
  download: function(username, file) {
    fileApi.isAllowDownload().then(() => {
      let url = `${this.baseUrl}/file/${username}${file.path}${file.name}?o=download`
      window.open(url, '_self')
    })
  },
  publicDownload: function(shareId, file) {
    window.open(this.publicDownloadUrl(shareId, file), '_self')
  },
  packageDownload: function(fileIds, token) {
    fileApi.isAllowDownload().then(() => {
      window.open(`${this.baseUrl}/packageDownload?fileIds=${fileIds}&jmal-token=${token}`, '_self')
    })
  },
  publicPackageDownload: function(shareId, fileIds) {
    window.open(this.publicPackageDownloadUrl(shareId, fileIds), '_self')
  },
  publicDownloadUrl: function(shareId, file) {
    return window.location.origin + `${this.baseUrl}/public/s/download/${file.id}/${shareId}`
  },
  publicPackageDownloadUrl: function(shareId, fileIds) {
    return window.location.origin + `${this.baseUrl}/public/s/packageDownload?shareId=${shareId}&fileIds=${fileIds}`
  },
}
