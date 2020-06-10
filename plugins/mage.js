import MageApi from '~/utils/MageApi'

export default function(ctx, inject) {
  inject('mage', new MageApi(ctx.$axios))
}
